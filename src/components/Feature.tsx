import React from "react";
import styled, { css } from 'styled-components';

import { DescriptionText, FeatureHeading } from "../pages/style";

const FeatureContainer = styled("div")<AlignmentStyled>`
  // margin-left: 5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
    margin-top: 5rem;

    ${props => props.alignment === 'left' && css`
      text-align: left;
      max-width: 22rem;
    `}
    
    ${props => props.alignment === 'center' && css`
      text-align: center;
    `}
  }

  @media (max-width: 768px) {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

const Icon = styled.img`
  margin-bottom: 2rem;
`;

interface AlignmentStyled {
  alignment: string;
}

interface FeatureProps {
  alignment: string;
  showIcon: boolean;
  icon?: string;
  headingText: string;
  descriptionText: string;
}

const Feature = (props: FeatureProps) => {
  const { alignment, showIcon, icon, headingText, descriptionText } = props;

  return (
    <FeatureContainer alignment={alignment}>
      {showIcon &&
        <Icon src={icon} alt="Icon" />
      }
      <FeatureHeading>{headingText}</FeatureHeading>
      <DescriptionText style={{ margin: 0 }}>{descriptionText}</DescriptionText>
    </FeatureContainer>
  );
}
 
export default Feature;
