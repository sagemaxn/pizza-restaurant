import { useEffect } from "react";
import axios from "axios";
const baseUrl = "http://localhost:3001";

import { Hero } from "../components/Hero";
//import { Container } from '../components/Container'
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Navbar } from "../components/Navbar";

function Index() {
  return (
    <>
      <Hero />
      <Main></Main>
      <DarkModeSwitch />
    </>
  );
}

export default Index;
