import Accessories from "@/components/Accessories";
import AdvisorConnect from "@/components/AdvisorConnect";
import HomebuyingSteps from "@/components/HomebuyingSteps";
import ProductDifference from "@/components/ProductDifference";
import ProductHero from "@/components/ProductHero";
import ResearchInsights from "@/components/ResearchInsights";
import Resources from "@/components/Resources";
import ROIsection from "@/components/ROIsection";
import Testimonial from "@/components/Testimonial";

import React from "react";

const Home = () => {
  return (
    <section>
      <ProductHero />
      <Testimonial />
      <HomebuyingSteps />
      <ProductDifference />
      <ROIsection />
      <ResearchInsights />
      <Accessories />
      <AdvisorConnect />
      <Resources />
    </section>
  );
};

export default Home;
