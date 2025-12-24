import Image from "next/image";
import { Header } from "./about/components/Header";
import { Feature } from "./about/components/Feature";
import { Footer } from "./about/components/Footer";
// import { Upcoming } from "./about/components/Upcoming";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature />
      {/* <Upcoming /> */}
      <Footer />
    </div>
  );
}
