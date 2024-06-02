import React, { useEffect, useState } from 'react';
import Header from './components/header/index';
import { Avatar, Box, Button, Grid, Typography, useTheme, } from '@mui/material';
import Contact from './Contact';
import Footer from './components/footer/index';
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineItemClasses } from '@mui/lab';
import Typewriter from 'typewriter-effect';

import seedlingIcon from './assets/logos/seedling.png';
import seedlingImage from './assets/images/seedling.jpg';
import seedlingImage1 from './assets/images/seedling-1.jpg';
import seedlingImage2 from './assets/images/seedling-2.jpg';
import seedlingImage3 from './assets/images/seedling-3.jpg';
import logoDark from "./assets/logos/logoDark.png"
import logoLight from "./assets/logos/logoLight.png"

import resume from './assets/resume/resume.jpg';

import manImage from './assets/images/man.jpg';
import html from "./assets/skills/html.png"
import css from "./assets/skills/css.png"
import javascript from "./assets/skills/javascript.png"
import bootstrap from "./assets/skills/bootstrap.png"
import reactjs from "./assets/skills/reactjs.png"
import redux from "./assets/skills/redux.png"
import formik from "./assets/skills/formik-icon.png"
import material from "./assets/skills/material-ui.png"
import nodejs from "./assets/skills/nodejs.png"
import expressjs from "./assets/skills/expressjs.png"
import mongodb from "./assets/skills/mongodb.png"
import mysql from "./assets/skills/mysql.png"
import github from "./assets/skills/github.png"
import video from "./assets/videos/video1.mp4"

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

const skillsList = [
  { title: "HTML", image: html },
  { title: "CSS", image: css, },
  { title: "JavaScript", image: javascript, },
  { title: "Bootstrap", image: bootstrap },
  { title: "React js", image: reactjs },
  { title: "Redux", image: redux },
  { title: "Formik", image: formik },
  { title: "Material ui", image: material },
  { title: "Node js", image: nodejs },
  { title: "Express js", image: expressjs },
  { title: "Mongodb", image: mongodb },
  { title: "MySql", image: mysql },
  { title: "Git hub", image: github },
]

function App() {
  const [defaultColors, setDefaultColors] = useState(defaultValue[1]);

  const fontStyle = {
    color: defaultColors?.color,
    textAlign: " justify",
    fontWeight: 0,
    fontSize: "18px"
  }


  const ThemeColors = [
    // light 
    {
      MainBackGroundColor: "#BBBB",
      BackGroundColor: "#000",
      TextColor: "#FFF",
      HeaderTextColor: "#FFF",
      SubHeaderTextColor: "#fff"
    },
    // Dark
    {
      MainBackGroundColor: "#000",
      BackGroundColor: "#000",
      TextColor: "#000",
      HeaderTextColor: "#000",
      SubHeaderTextColor: "#000"
    }
  ]

  const HeaderTag = ({ title, id }) => {
    return (
      <div
        id={id} >
        <Box sx={{ paddingY: 10, textAlignLast: { md: "left", xs: "center" } }}>
          <h1 style={{ color: defaultColors?.headerColor, fontSize: "50px", }}> {title} </h1>
        </Box>
      </div >
    )
  }

  const SubHeaderTag = ({ title, subTitle }) => {
    if (!subTitle) {
      return (
        <>
          <h1 style={{ color: defaultColors?.subHeaderColor, }} > {title} </h1>
        </>
      )
    } else {
      return (
        <>
          <h1 style={{ color: defaultColors?.subHeaderColor, marginTop: 5, marginBottom: 25 }} > {title}
            <h4 style={{ color: defaultColors?.color, fontWeight: 500, margin: 0, padding: 0, fontSize: 18 }} >{subTitle}</h4>
          </h1>
        </>
      )
    }
  }

  const TimeList = () => {
    return (
      <>
        <TimelineItem >
          <TimelineSeparator >
            <TimelineDot variant="outlined" sx={{ border: "none" }} >
              <Avatar alt="Seedling" sx={{ backgroundColor: defaultColors?.backgroundColor, }}   >
                <img src={seedlingIcon} style={{ width: '30px', height: '30px' }} />
              </Avatar>
            </TimelineDot>
            <TimelineConnector sx={{ width: 1.5 }} />
          </TimelineSeparator>
          <TimelineContent >

            <Box>
              <SubHeaderTag
                title={'Seedling'}
                subTitle={"it Weather"} />
              <img src={seedlingImage1} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px"
              }} />
              <p style={fontStyle}>
                Innovative hospital management software architect.
                Utilizing Node.js, Express-handlebars, Angular and monogo DB technologies to streamline operations,
                enhance efficiency, and facilitate seamless communication within healthcare environments
              </p>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem >
          <TimelineSeparator >
            <TimelineDot variant="outlined" sx={{ border: "none" }} >
              <Avatar alt="Seedling" sx={{ backgroundColor: defaultColors?.backgroundColor, }}   >
                <img src={seedlingIcon} style={{ width: '30px', height: '30px' }} />
              </Avatar>
            </TimelineDot>
            <TimelineConnector sx={{ width: 1.5 }} />
          </TimelineSeparator>
          <TimelineContent >

            <Box>
              <SubHeaderTag title={'Seedling'} subTitle={"it Weather"} />
              <img src={seedlingImage2} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px",
                // border: "solid 5px #FFF",
                // boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }} />
              <p style={fontStyle}>
                Innovative hospital management software architect.
                Utilizing Node.js, Express-handlebars, Angular and monogo DB technologies to streamline operations,
                enhance efficiency, and facilitate seamless communication within healthcare environments
              </p>
            </Box>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem >
          <TimelineSeparator >
            <TimelineDot variant="outlined" sx={{ border: "none" }} >
              <Avatar alt="Seedling" sx={{ backgroundColor: defaultColors?.backgroundColor, }}   >
                <img src={seedlingIcon} style={{ width: '30px', height: '30px' }} />
              </Avatar>
            </TimelineDot>
            <TimelineConnector sx={{ width: 1.5 }} />
          </TimelineSeparator>
          <TimelineContent >

            <Box>
              <SubHeaderTag title={'Seedling'} subTitle={"it Weather"} />
              <img src={seedlingImage3} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px"
              }} />
              <p style={fontStyle}>
                Innovative hospital management software architect.
                Utilizing Node.js, Express-handlebars, Angular and monogo DB technologies to streamline operations,
                enhance efficiency, and facilitate seamless communication within healthcare environments
              </p>
            </Box>
          </TimelineContent>
        </TimelineItem>
      </>
    )
  }

  const handleDownload = () => {
    const fileName = 'mahesh_chudasama_resume.jpg';
    const link = document.createElement('a');
    link.href = resume;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const videoContainerStyle = {
    width: '100%',
    height: '550px',
    overflow: 'hidden',
    position: 'relative',
    zIndex: -10,
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  return (
    <>
      <Header themeCallBack={(event) => { event === true ? setDefaultColors(defaultValue[1]) : setDefaultColors(defaultValue[0]) }} />
      <div id='Home' style={{ position: 'relative', background: 'rgba(0, 0, 0, 0.7)', width: '100%' }}>
        <Box sx={{ color: '#fff', position: 'absolute', top: '40%', width: '-webkit-fill-available' }}>
          <Typography sx={{ fontSize: '60px', textAlign: 'center', margin: '0px', color: '#fff' }}>
            <img src={logoLight} alt="Logo" style={{ zIndex: 100 }} />
          </Typography>
        </Box>

        <div style={videoContainerStyle}>
          <video autoPlay loop muted playsInline style={videoStyle}>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div style={{ backgroundColor: defaultColors?.backgroundColor, margin: 0, padding: 0 }}>
        <Box sx={{ marginX: { lg: 30, md: 10, xs: 5 } }} >

          {/* Over view   */}
          <HeaderTag title={'OVERVIEW'} id={"Overview"} />
          <Grid container spacing={5} >

            <Grid item xs={12} lg={6} order={{ xs: 1, lg: 0 }} >
              <p style={fontStyle}>
                Hi, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science graduate from India.
              </p>

              <p style={fontStyle}>
                I am a Software engineer with a strong foundation in Computer Science, specializing in web development. I have good work experience with various startups where I was core part of developer team and work on major features. Proficient in a range of technologies, I've successfully delivered tailored solutions for various freelance projects.
              </p>

              <p style={fontStyle}>
                I love working on new and exciting technologies. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.
              </p>

              <Button
                variant="contained"
                onClick={handleDownload}
              >Resume</Button>
              {/* <p style={fontStyle}>
                Hi, I am a Full Stack Web Developer and Web Designer. An Open Source enthusiast and a Computer Science graduate from India.
              </p>

              <p style={fontStyle}>
                I am a Software engineer with a strong foundation in Computer Science, specializing in web development. I have good work experience with various startups where I was core part of developer team and work on major features. Proficient in a range of technologies, I've successfully delivered tailored solutions for various freelance projects.
              </p>

              <p style={fontStyle}>
                I love working on new and exciting technologies. I have a keen interest in Web Development and I am always looking for new opportunities to learn and grow.
              </p> */}


            </Grid>

            <Grid item xs={12} lg={6} order={{ xs: 0, lg: 1 }} >
              <Box sx={{
                textAlign: "center",
              }}>
                <Box
                  sx={{
                    margin: "auto",
                    backgroundImage: `url('${manImage}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 500,
                    width: 400,
                    borderRadius: 10,
                    border: "solid 7px #FFFF",
                    boxShadow: " rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
                    position: "relative",
                  }}>
                  <h2 style={{
                    width: "100%",
                    backgroundColor: "#FFF",
                    padding: "20px 0px",
                    position: "absolute",
                    bottom: "-20px",
                    borderRadius: "0 0px 30px 30px",
                  }} >

                    <Typewriter
                      options={{
                        strings: ["I'm Mahesh Chudasama", "I'm  full stack web developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </h2>

                </Box>
              </Box>
            </Grid>

          </Grid>

          {/* Experience */}
          <HeaderTag title={'EXPERIENCE'} id={"Experience"} />
          <Box>
            <SubHeaderTag title={'Software Development Engineer (SDE)'} />
            <h3 style={{ color: defaultColors?.blackAndWight }}>Plusinfosys  <span style={{ color: defaultColors?.color, fontWeight: 100 }}>- Software Engineer</span> </h3>
            <p style={fontStyle}>
              I collaborated with cross-functional teams to gather requirements, ensuring stakeholder needs were met.
              Designed scalable architectures using modern frameworks (Node.js, Django, Spring Boot) and optimized performance through caching and database indexing.
              Led the full SDLC, employing Agile methodologies for iterative development. Established coding standards and implemented comprehensive testing plans.
              Built CI/CD pipelines with Jenkins and GitHub Actions for automated testing and deployment.
              Set up monitoring tools like New Relic and Prometheus to maintain system health.
              Created detailed documentation and conducted training sessions to promote knowledge sharing and continuous learning.
              Enhanced application performance and successfully delivered high-impact projects on time.
              Used technologies like AWS, Docker, and Kubernetes for efficient and scalable solutions.
            </p>
            <h3 style={{ color: defaultColors?.blackAndWight }}>February 2023 - Present </h3>
          </Box>

          <HeaderTag title={'SKILLS'} id={"Skills"} />
          <div style={{ display: "ruby" }}>
            {skillsList && skillsList.length > 0 && skillsList.map((item, key) => {
              return (
                <div style={{ margin: "20px" }}>
                  <img src={item?.image} width={"80px"} height={"auto"} />
                  <h5 style={{ textAlign: "center", color: defaultColors?.color }}>{item?.title}</h5>
                </div>
              )
            })}
          </div>

          {/* Project */}
          <HeaderTag title={'PROJECTS'} id={"Project"} />

          <Box sx={{ display: { lg: "ruby", xs: "none", } }}>
            <Timeline position={"alternate-reverse"}>
              <TimeList />
            </Timeline>
          </Box>

          <Box sx={{ display: { lg: "none", xs: "ruby", } }}>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}>
              <TimeList />
            </Timeline>
          </Box>

          {/* Education */}
          <HeaderTag title={'EDUCATION'} id={"Education"} />

          <Box>
            <SubHeaderTag title={'Master of Computer Application'} />
            <h2 style={{ color: defaultColors?.color, fontWeight: 100 }}>Marwadi university </h2>
            <h4 style={{ color: defaultColors?.blackAndWight }}>Mar-2023 </h4>
          </Box>

          <Box>
            <SubHeaderTag title={'Bachelor of Computer Application'} />
            <h2 style={{ color: defaultColors?.color, fontWeight: 100 }}>T.N. Rao College</h2>
            <h4 style={{ color: defaultColors?.blackAndWight }}>Mar-2021 </h4>
          </Box>









          <HeaderTag title={'Contact Us'} id={"ContactUs"} />
          <Contact defaultColors={defaultColors} />


        </Box>
        <Footer />
      </div>

    </>
  );
}

export default App;
