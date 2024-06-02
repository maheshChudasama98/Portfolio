import React, { useEffect, useRef, useState } from 'react';
import Header from './components/header/index';
import { Box } from '@mui/material';
import Contact from './Contact';
import Footer from './components/footer/index';
import { gsap, } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import VideoPart from "./components/VideoPart"
import Overview from "./components/Overview"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"

const defaultValue = [
  {
    backgroundColor: "#FFFFFF",
    backgroundCard: "#FFFFFF",
    color: "#475259",
    blackAndWight: "#000000",
    headerColor: "#475259",
    subHeaderColor: "#118d7e"
  },
  {
    backgroundColor: "#050816",
    backgroundCard: "#183446",
    blackAndWight: "#FFFFFF",
    color: "#FFFFFF",
    headerColor: "#FFFFFF",
    subHeaderColor: "#118d7e"
  },
]
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [defaultColors, setDefaultColors] = useState(defaultValue[1]);

  const HeaderTag = ({ title, id }) => {
    const boxRef = useRef(null);

    useEffect(() => {
      const box = boxRef.current;
      gsap.to(box, {
        scrollTrigger: {
          backgroundPositionX: "0%",
          trigger: box,
          start: 'top 80%',
          end: 'bottom 20%',
          stagger: 1,
          scrub: true,
          onEnter: function () {
            gsap.fromTo(
              box,
              { y: 100, autoAlpha: 0 },
              {
                duration: 1,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
              }
            );
          },
          onEnterBack: function () {
            gsap.fromTo(
              box,
              { y: -100, autoAlpha: 0 },
              {
                duration: 1.25,
                y: 0,
                autoAlpha: 1,
                ease: "back",
                overwrite: "auto"
              }
            );
          },
          onLeaveBack: function () {
            gsap.fromTo(box, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
          }
        },
        duration: 1.5,
      });
    }, []);

    return (
      <div
        id={id} >
        <Box sx={{ paddingY: 2, textAlignLast: { md: "left", xs: "center" } }}>
          <h1 ref={boxRef} style={{
            color: defaultColors?.headerColor, fontSize: "70px",
          }}> {title} </h1>
        </Box>
      </div >
    )
  }

  return (
    <>
      <Header themeCallBack={(event) => { event === true ? setDefaultColors(defaultValue[1]) : setDefaultColors(defaultValue[0]) }} />

      {/* <VideoPart /> */}
      <div style={{ backgroundColor: defaultColors?.backgroundColor, margin: 0, padding: 0 }}>
        <Box sx={{ marginX: { lg: 30, md: 10, xs: 5 } }} >

          {/* Over view   */}
          <HeaderTag title={'OVERVIEW'} id={"Overview"} defaultColors={defaultColors} />
          <Overview defaultColors={defaultColors} />

          {/* Experience */}
          <HeaderTag title={'EXPERIENCE'} id={"Experience"} />
          <Experience defaultColors={defaultColors} />

          {/* Skills */}
          <HeaderTag title={'SKILLS'} id={"Skills"} />
          <Skills defaultColors={defaultColors} />

          {/* Project */}
          <HeaderTag title={'PROJECTS'} id={"Project"} />
          <Projects defaultColors={defaultColors} />

          {/* Education */}
          <HeaderTag title={'EDUCATION'} id={"Education"} />
          <Education defaultColors={defaultColors} />

          <HeaderTag title={'Contact Us'} id={"ContactUs"} />
          <Contact defaultColors={defaultColors} />
        </Box>
        <Footer />
      </div>
    </>
  );
}

export default App;
