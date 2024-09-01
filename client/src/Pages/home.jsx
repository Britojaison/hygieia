import Mainpage from "../components/mainpage";
import Header from "../components/HEADER";
import Footer from "../components/footer";
function Home(){
    return(
        <>
        <Header isLoggedIn={false} />
        <Mainpage />
        <Footer />
        </>
    )
}
export default Home