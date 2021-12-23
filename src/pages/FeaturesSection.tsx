import React from "react";
import { Col, Row } from "reactstrap";

import { FeatureInterface } from "../interfaces/feature";
import { SectionHeading, DescriptionText } from "./style";
import Logo1 from "../assets/images/icon-blacklist.svg" ;
import Logo2 from "../assets/images/icon-text.svg" ;
import Logo3 from "../assets/images/icon-preview.svg" ;
import Feature from "../components/Feature";

const FeaturesSection = () => {
  const features: FeatureInterface[] = [
    {
      heading: "Create blacklists",
      description: "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
      icon: Logo1,
    },
    {
      heading: "Plain text snippets",
      description: "Remove unwanted formatting from copied text for a consistent look.",
      icon: Logo2,
    },
    {
      heading: "Sneak preview",
      description: "Quick preview of all snippets on your Clipboard for easy access.",
      icon: Logo3,
    },
  ];

  return (
    <section>
      <SectionHeading>Supercharge your workflow</SectionHeading>
      <DescriptionText>
        We&apos;ve got the tools to boost your productivity.
      </DescriptionText>
      <Row>
        {features.map((feature: FeatureInterface, index: number) => (
        <Col md="4" key={`feature-${index}`}>
          <Feature
            headingText={feature.heading}
            descriptionText={feature.description}
            showIcon={true}
            icon={feature.icon}
            alignment="center"
          />
        </Col>
        ))}
      </Row>
    </section>
  );
}
 
export default FeaturesSection;
