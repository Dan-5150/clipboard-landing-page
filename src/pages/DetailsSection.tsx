import React from "react";
import { Row, Col } from "reactstrap";
import styled from 'styled-components';

import Feature from "../components/Feature";
import { Section, SectionHeading, DescriptionText } from "./style";
import { FeatureInterface } from "../interfaces/feature";
import ComputerImg from "../assets/images/image-computer.png";

const Image = styled.img`
  height: 100%;
  object-fit: contain;

  @media (min-width: 992px) {
    margin-left: -20rem;
  }

  @media (min-width: 768px) {
    /* min-width: 700px; */
    width: -webkit-fill-available;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    width: 96%;
  }
`;

const DetailsSection = () => {
  const details: FeatureInterface[] = [
    {
      heading: "Quick Search",
      description: "Easily search your snippets by content, category, web address, application and more.",
    },
    {
      heading: "iCloud Sync",
      description: "Instantly saves and syncs snippets across all your devices",
    },
    {
      heading: "Complete History",
      description: "Retrieve any snippets from the first moment you started using the app.",
    },
  ];

  return (
    <Section className="container">
      <SectionHeading>Keep track of your snippets</SectionHeading>
      <DescriptionText className="mb-5">
        Clipboard instantly stores any item you copy in the cloud,
        meaning you can access your snippets immediately on all your devices.
        Our Mac and iOS apps will help you organize everything.
      </DescriptionText>

      <Row>
        <Col lg="6">
          <Image src={ComputerImg} alt="Computer" />
        </Col>
        <Col lg="6">
          {details.map((detail: FeatureInterface, index: number) => (
            <Feature
              key={index}
              alignment="left"
              showIcon={false}
              headingText={detail.heading}
              descriptionText={detail.description}
            />
          ))}
        </Col>
      </Row>
    </Section>
  );
}
 
export default DetailsSection;
