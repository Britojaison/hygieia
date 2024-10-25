import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';

const VideoConference = () => {
    const [roomId, setRoomId] = useState('');
    const [inCall, setInCall] = useState(false);
    const localVideoRef = useRef(null);
    const remoteVideoRefs = useRef([]); // Array to store refs for remote videos
    const [remoteStreams, setRemoteStreams] = useState([]); // Store video tracks
    const peerConnections = useRef({}); // Store connections for each peer
    const socket = useRef(null);
    const localStream = useRef(null); // Store the local stream

    useEffect(() => {
        socket.current = io('http://localhost:5000', {
            path: '/socket.io', // Default path
        });

        // Listen for when another user joins the room
        socket.current.on('user-joined', async (userId) => {
            console.log('Another user joined the room:', userId);
            await createPeerConnection(userId, true); // Create a connection with the new user
        });

        // Handle receiving offer
        socket.current.on('offer', async (data) => {
            await handleOffer(data.offer, data.userId);
        });

        // Handle receiving answer
        socket.current.on('answer', async (data) => {
            await peerConnections.current[data.userId].setRemoteDescription(new RTCSessionDescription(data.answer));
        });

        // Handle receiving ICE candidates
        socket.current.on('ice-candidate', (data) => {
            peerConnections.current[data.userId].addIceCandidate(new RTCIceCandidate(data.candidate));
        });

        return () => {
            socket.current.disconnect();
        };
    }, []);

    const handleJoinRoom = async () => {
        if (roomId === '') return;
        socket.current.emit('join-room', roomId);
        await startVideoCall(); // Start the video call
    };

    const startVideoCall = async () => {
        try {
            // Get local media (video/audio)
            localStream.current = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            localVideoRef.current.srcObject = localStream.current; // Display local video

            setInCall(true);

            // Once the user joins, create peer connections for every other user in the room
            socket.current.emit('get-users-in-room', roomId, async (users) => {
                for (const userId of users) {
                    await createPeerConnection(userId, false); // Create a peer connection for each existing user
                }
            });
        } catch (error) {
            console.error('Error accessing media devices.', error);
        }
    };

    const createPeerConnection = async (userId, createOffer) => {
        const peerConnection = new RTCPeerConnection();

        // Handle ICE candidate events
        peerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                socket.current.emit('ice-candidate', { room: roomId, candidate: event.candidate, userId });
            }
        };

        // Handle when tracks are added to the peer connection (i.e., remote streams)
        peerConnection.ontrack = (event) => {
            setRemoteStreams((streams) => [...streams, event.streams[0]]); // Add new remote stream
        };

        // Add local stream tracks to the peer connection
        localStream.current.getTracks().forEach((track) => {
            peerConnection.addTrack(track, localStream.current);
        });

        // Save the peer connection for this user
        peerConnections.current[userId] = peerConnection;

        // If we're the one creating the offer, generate and send it to the other user
        if (createOffer) {
            const offer = await peerConnection.createOffer();
            await peerConnection.setLocalDescription(offer);
            socket.current.emit('offer', { room: roomId, offer, userId });
        }
    };

    const handleOffer = async (offer, userId) => {
        // Create a peer connection in response to an offer
        const peerConnection = await createPeerConnection(userId, false);
        await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await peerConnection.createAnswer();
        await peerConnection.setLocalDescription(answer);
        socket.current.emit('answer', { room: roomId, answer, userId });
    };

    return (
        <div>
            {!inCall && (
                <div>
                    <input
                        type="text"
                        placeholder="Enter Room ID"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <button onClick={handleJoinRoom}>Join Room</button>
                </div>
            )}
            <div>
                {/* Display local video */}
                <video ref={localVideoRef} autoPlay muted style={{ width: '600px' }}></video>

                {/* Display remote videos */}
                {remoteStreams.map((stream, index) => (
                    <video
                        key={index}
                        ref={(el) => (remoteVideoRefs.current[index] = el)}
                        autoPlay
                        style={{ width: '300px' }}
                        onLoadedMetadata={() => {
                            if (remoteVideoRefs.current[index]) {
                                remoteVideoRefs.current[index].srcObject = stream;
                            }
                        }}
                    ></video>
                ))}
            </div>
        </div>
    );
};

export default VideoConference;
