import React from "react";

import Button from "../components/Button";
import { SectionHeading, DescriptionText, Section } from "./style";
 
const AppsSection = () => {
  return (
    <Section className="container">
      <SectionHeading>Clipboard for iOS and Mac OS</SectionHeading>
      <DescriptionText className="mb-4">
        Available for free on the App Store. Download for Mac or iOS, sync with iCloud
        and you&apos;re ready to start adding to your clipboard.
      </DescriptionText>
      <Button
        text="Download for iOS"
        color="cyan"
      />
      <Button
        text="Download for Mac"
        color="blue"
      />
    </Section>
  );
}
 
export default AppsSection;
