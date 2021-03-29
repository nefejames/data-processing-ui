import { Nav, A, UL, NavLeft } from "../styles/nav";
import Button from "../styles/button";
import Image from "next/image";

export default function Navbar() {
  return (
    <Nav>
      <NavLeft>
        <Image src="/logo.svg" width="36" height="36" />
        <UL>
          <A>About</A>
          <A>Gallery</A>
          <A>Pricing</A>
          <A>faq</A>
          <A>benefits</A>
        </UL>
      </NavLeft>

      <div>
        <Button>sign in</Button>
        <Button solid navbtn>
          sign up
        </Button>
      </div>
    </Nav>
  );
}
