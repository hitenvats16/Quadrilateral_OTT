import Footer from "../components/footer";
import NavBar from "../components/navbar";
import Originals from "../components/originals";
import SlidingCards from "../components/slidingCards";
import Trending from "../components/trending";

const Home = () => {
    return (
        <>
            <NavBar />
            <SlidingCards />
            <Originals />
            <Trending/>
            <Footer />
        </>
    );
}

export default Home;