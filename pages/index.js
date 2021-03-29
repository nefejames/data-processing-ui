import Head from "next/head";
import HeroSection from "../components/HeroSection";
import { Wrapper, Navbar } from "../components/index";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Processing Company</title>
      </Head>

      <Wrapper>
        <Navbar />
        <HeroSection />
      </Wrapper>
    </div>
  );
}
