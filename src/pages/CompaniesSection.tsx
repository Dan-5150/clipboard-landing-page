import React from "react";

import { Company } from "../interfaces/company";
import Google from "../assets/images/logo-google.png";
import IBM from "../assets/images/logo-ibm.png";
import Microsoft from "../assets/images/logo-microsoft.png";
import HP from "../assets/images/logo-hp.png";
import VectorGraphics from "../assets/images/logo-vector-graphics.png";
import styled from "styled-components";

const CompanyImg = styled.img`
  margin: 2rem;
  width: 120px;
`;

const CompaniesSection = () => {
  const companies: Company[] = [
    {
      name: "Google",
      link: Google,
    },
    {
      name: "IBM",
      link: IBM,
    },
    {
      name: "Microsoft",
      link: Microsoft,
    },
    {
      name: "HP",
      link: HP,
    },
    {
      name: "Vector Graphics",
      link: VectorGraphics,
    },
  ];

  return (
    <section className="container mb-5">
      {companies.map((company: Company, index: number) => (
        <CompanyImg src={company.link} alt={company.name} key={`company-${index}`} />
      ))}
    </section>
  );
}
 
export default CompaniesSection;
