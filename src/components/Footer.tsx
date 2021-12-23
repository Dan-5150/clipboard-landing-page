import React from "react";
import styled from 'styled-components';
import { Row, Col } from "reactstrap";

import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Instagram from "../assets/images/icon-instagram.svg";
import Logo from "../assets/images/logo.svg";

const FooterContainer = styled.footer`
  background-color: #f5f6f8;
  min-height: 8rem;
  padding: 2rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialMediaIcons = styled.img`
  margin: 0 1rem;
`;

const Links = styled.a`
  color: var(--dark-grayish-blue);
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: var(--strong-cyan);
  }
`;

interface FooterLinks {
  text: string;
  link: string;
}

const Footer = () => {
  const footerLinks: FooterLinks[] = [
    {
      text: "FAQs",
      link: "/",
    },
    {
      text: "Privacy Policy",
      link: "/",
    },
    {
      text: "Install Guide",
      link: "/",
    },
    {
      text: "Contact Us",
      link: "/",
    },
    {
      text: "Press Kit",
      link: "/",
    },
  ];

  return (
    <FooterContainer>
      <section className="container pb-0">
      <Row>
        <Col lg="2">
          <img src={Logo} alt="Logo" width={50} style={{ marginBottom: "2rem" }} />
        </Col>
        <Col lg="6">
          <Row>
            {footerLinks.map((link: FooterLinks, index: number) => (
              <Col lg="4" key={`footer-${index}`} className="my-2">
                <Links href={link.link}>{link.text}</Links>
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg="4" className="d-flex justify-content-lg-end justify-content-center mt-4 mt-lg-3">
          <Links href="#">
            <SocialMediaIcons src={Facebook} alt="Facebook" />
          </Links>
          <Links href="#">
            <SocialMediaIcons src={Twitter} alt="Twitter" />
          </Links>
          <Links href="#">
            <SocialMediaIcons src={Instagram} alt="Instagram" />
          </Links>
        </Col>
      </Row>
      </section>
    </FooterContainer>
  );
}
 
export default Footer;
