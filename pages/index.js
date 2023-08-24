import React, { useState } from "react";
import Header from "../components/header";
import Head from "next/head";
import Hero from "../components/hero";
import Comapnies from "../components/comapnies";
import Problems from "../components/problems";
import Work from "../components/work";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Demo from "../components/demo";
import Integrations from "../components/integrations";
import Testimonials from "../components/testimonials";
const index = () => {

  return (
    <>
    <Head>
      <title>Callify.ai</title>
    </Head>
 
    <Header/>
    <Hero/>
    <Comapnies/>
    <Problems/>
    <Work/>
    <Benefits/>
    <Integrations/>
    <Testimonials/>
    <Demo/>
    <Footer/>
    </>
    
  );
};

export default index;
