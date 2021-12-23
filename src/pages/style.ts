import styled from 'styled-components';

export const Section = styled.section`
  text-align: center;
  padding-bottom: 6rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const MainHeading = styled.h1`
  font-weight: 600;
  color: var(--dark-grayish-blue);
  margin-bottom: 1rem;
  padding: 0 0.25rem;
`;

export const SectionHeading = styled.h2`
  font-weight: 600;
  color: var(--dark-grayish-blue);
  margin-bottom: 1rem;
`;

export const FeatureHeading = styled.h3`
  font-weight: 600;
  color: var(--dark-grayish-blue);
  margin-bottom: 1rem;
`;

export const DescriptionText = styled.p`
  color: var(--grayish-blue);
  margin: auto;
  margin-bottom: 4rem;

  @media (min-width: 992px) {
    max-width: 40rem;
  }
`;
