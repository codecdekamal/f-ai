import React from "react";
import NavigationBar from "@/customComponents/NavigationBar";
import VisDisLayout from "@/customComponents/VisDisLayout";
import VisDisLayoutRight from "@/customComponents/VisDisLayoutRight";
import Footer from "@/customComponents/Footer";
// vision data
import { data } from "../data/visionData";
const Vision = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <main className="bg-black/90 ">
        <section className="relative top-20 pb-20">
          <div className="  tracking-wide py-14 h-fit w-screen text-start px-4 font-roboto flex flex-col text-white">
            <h1 className="md:pl-12  text-6xl font-lg  ">Our Vision</h1>
            <p className="leading-8 md:pl-12 pt-12 text-start lg:pr-24 lg:text-lg font-semibold font-roboto  text-balance text-white/90">
              Our vision is to empower businesses of all sizes with unparalleled
              efficiency, accuracy, and insight, enabling them to thrive in the
              dynamic landscape of modern commerce. By harnessing the
              transformative potential of artificial intelligence, we envision a
              future where tedious manual processes are replaced with seamless
              automation, enabling businesses to focus on innovation, growth,
              and strategic decision-making. Together, we aim to redefine the
              standards of financial excellence, driving success and prosperity
              for our clients and partners worldwide." Explore our target
              segment shared below for more insightful experience.
            </p>
          </div>
        </section>
        <VisDisLayout
          heading="Book Keeping"
          Tasks={data.financialTasks}
        ></VisDisLayout>
        <VisDisLayoutRight
          heading="Accounting"
          span2="3"
          Tasks={data.itTasks}
        ></VisDisLayoutRight>
        <VisDisLayout
          heading="Reporting"
          Tasks={data.reportingTasks}
        ></VisDisLayout>
        <VisDisLayoutRight
          heading="Audit"
          span2="3"
          Tasks={data.auditTasks}
        ></VisDisLayoutRight>
        <VisDisLayout heading="Tax" Tasks={data.taxTasks}></VisDisLayout>
        <VisDisLayoutRight
          heading="Due Deligence"
          span2="3"
          Tasks={data.dueDiligenceTasks}
        ></VisDisLayoutRight>
        <VisDisLayout
          heading="Compliances"
          Tasks={data.complianceTasks}
        ></VisDisLayout>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Vision;
