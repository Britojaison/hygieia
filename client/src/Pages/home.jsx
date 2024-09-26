import Mainpage from "../components/mainpage";
import Header from "../components/HEADER";
import Footer from "../components/footer";
function Home(){
    return(
        <>
        <Header isLoggedIn={true} />
        <Mainpage />
        <Footer />
       
        </>
    )
}
export default Home