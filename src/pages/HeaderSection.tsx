import React from "react";
import styled from 'styled-components';

import Button from "../components/Button";
import Logo from "../assets/images/logo.svg";
import DesktopBg from "../assets/images/bg-header-desktop.png";
import MobileBg from "../assets/images/bg-header-mobile.png";
import { Section, MainHeading, DescriptionText } from "./style";

const ImageMask = styled.div`
  background-color: white;
  width: 100vw;
  height: 200px;
  background-size: cover;
  color: white;
  /* padding: 20px; */

  @media (min-width: 768px) {
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), url(${DesktopBg});
  }

  @media (max-width: 768px) {
    background-image: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), url(${MobileBg});
  }
`;

const Content = styled.div`
  margin-top: -10rem;
`;

const LogoImg = styled.img`
  margin: 3rem 0;
`;

const HeaderSection = () => {
  return (
    <Section className="container">
      <ImageMask></ImageMask>
      <Content>
        <LogoImg src={Logo} alt="Logo" height="100px" />
        <MainHeading>A history of everything you copy</MainHeading>
        <DescriptionText>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </DescriptionText>
        <Button
          text="Download for iOS"
          color="cyan"
        />
        <Button
          text="Download for Mac"
          color="blue"
        />
      </Content>
    </Section>
  );
}
 
export default HeaderSection;
