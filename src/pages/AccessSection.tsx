import React from "react";

import { SectionHeading, DescriptionText } from "./style";
import Devices from "../assets/images/image-devices.png";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const AccessSection = () => {
  return (
    <section>
      <SectionHeading>Access Clipboard Anywhere</SectionHeading>
      <DescriptionText>
        Whether you&apos;re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </DescriptionText>
      <Image src={Devices} alt="Devices" />
    </section>
  );
}
 
export default AccessSection;
