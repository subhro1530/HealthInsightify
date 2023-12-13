// pages/index.js
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ImageUpload from "@/components/ImageUpload";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ImageUpload />
    </div>
  );
};

export default Home;
