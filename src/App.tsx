import React from 'react';
import styled from 'styled-components';

import './App.scss';
import HeaderSection from "./pages/HeaderSection";
import FeaturesSection from "./pages/FeaturesSection";
import AccessSection from "./pages/AccessSection";
import DetailsSection from "./pages/DetailsSection";
import CompaniesSection from "./pages/CompaniesSection";
import AppsSection from "./pages/AppsSection";
import Footer from "./components/Footer";

const Main = styled.main`
  text-align: center;
  overflow-x: hidden;
`;

const App = () => {
  return (
    <Main>
      <HeaderSection />
      <DetailsSection />
      <AccessSection />
      <FeaturesSection />
      <CompaniesSection />
      <AppsSection />
      <Footer />
    </Main>
  );
}

export default App;
