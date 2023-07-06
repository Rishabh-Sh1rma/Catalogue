import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Slider from "../components/Scroll";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Shree Ji Gems"
        text="Works With all kind of gemstones."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Slider />
      <Destination />
      <Map />
    </>
  );
}

export default Home;
