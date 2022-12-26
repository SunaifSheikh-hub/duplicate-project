import React from "react";
import Image from "next/image"
import logoImg from '../../../assets/images/logo.png'
import begambleawareImg from '../../../assets/images/begambleawareorg.png'
import { Body, UpperSection, BottomSection, Menu } from "./Footer.styles";

function Footer() {
  return (
    <Body>
      <UpperSection>
        <Image  src={logoImg} alt="Logo" width={150} />
      </UpperSection>
      <BottomSection>

        <div className="img-cont">
          <Image  src={begambleawareImg} alt="Logo" height={35} />
        </div>

        <p>BeGambleAware.org aims to promote responsibility in gambling. They provide information to help you make informed decisions about your gambling.</p>

        <p>Call the National Gambling Helpline <br/> 0808 8020 133 8am to midnight, 7 days a week.</p>

        <p>We are committed to responsible gambling and have a number of ways to help you stay in control and keep gambling fun.</p>

        <p>You must be 18 years old or over to use this site. <br/> Please bet responsibly.</p>

        <p>Copyright © 2022</p>
      </BottomSection>
        {/* <Menu>
          <li>
            <Link href="#">Football Tips</Link>
          </li>
          <li>
            <Link href="#">Predictions</Link>
          </li>
          <li>
            <Link href="#">Analysis</Link>
          </li>
          <li>
            <Link href="#">Sport Tips</Link>
          </li>
        </Menu> */}
    </Body>
  );
}

export default Footer;
