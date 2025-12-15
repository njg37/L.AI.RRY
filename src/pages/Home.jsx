import React from "react";
import Herosection5 from "../HomeSections/Herosection5.jsx";
import ExamsCovered from "../HomeSections/ExamsCovered.jsx";
import HowItWork from "../HomeSections/HowItWork.jsx";
import ExamSection from "../HomeSections/ExamSection.jsx";
import JoinUs from "../HomeSections/JoinUs.jsx";
import Testimonial from "../HomeSections/Testimonial.jsx";
import FAQ from "../HomeSections/FAQ.jsx";
import SubsidiaryLogos from "../HomeSections/SubsidiaryLogos.jsx";

export default function Home() {
  return (
    <>
      <section className="snap-start scroll-mt-[82px] bg-gradient-to-r from-blue-700 to-purple-700">
        <Herosection5 />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <ExamsCovered />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <HowItWork />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <ExamSection />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <JoinUs />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <Testimonial />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <FAQ />
      </section>

      <section className="snap-start scroll-mt-[var(--header-h)] bg-[#ebf0f4]">
        <SubsidiaryLogos />
      </section>
    </>
  );
}


