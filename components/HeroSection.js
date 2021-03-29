import HeroSectionDiv from "../styles/heroSection";
import { Left, Right } from "../styles/containers";
import Image from "next/image";

export default function HeroSection() {
  return (
    <HeroSectionDiv>
      <Left></Left>

      <Right>
        <Image src="/runner.svg" width="724" height="580" />
      </Right>
    </HeroSectionDiv>
  );
}
