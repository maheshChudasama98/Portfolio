import React, { useEffect, useRef } from 'react'
import { gsap, } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Avatar, Box } from '@mui/material'

import seedlingIcon from '../../assets/logos/seedling.png';
import seedlingImage from '../../assets/images/seedling.jpg';
import seedlingImage1 from '../../assets/images/seedling-1.jpg';
import seedlingImage2 from '../../assets/images/seedling-2.jpg';
import seedlingImage3 from '../../assets/images/seedling-3.jpg';
gsap.registerPlugin(ScrollTrigger);

import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator, timelineItemClasses } from '@mui/lab';

const Index = ({ defaultColors }) => {

  const TimeList = () => {
    const boxRef = useRef(null);
    useEffect(() => {
      const box = boxRef.current;
      // gsap.to(box, {
      //   scrollTrigger: {
      //     backgroundPositionX: "0%",
      //     trigger: box,
      //     start: 'top 80%',
      //     end: 'bottom 20%',
      //     stagger: 1,
      //     scrub: true,
      //     onEnter: function () {
      //       gsap.fromTo(
      //         box,
      //         { y: 100, autoAlpha: 0 },
      //         {
      //           duration: 1,
      //           y: 0,
      //           autoAlpha: 1,
      //           ease: "back",
      //           overwrite: "auto"
      //         }
      //       );
      //     },
      //     onEnterBack: function () {
      //       gsap.fromTo(
      //         box,
      //         { y: -100, autoAlpha: 0 },
      //         {
      //           duration: 1.25,
      //           y: 0,
      //           autoAlpha: 1,
      //           ease: "back",
      //           overwrite: "auto"
      //         }
      //       );
      //     },
      //     onLeaveBack: function () {
      //       gsap.fromTo(box, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      //     }
      //   },
      //   duration: 1.5,
      // });

      const crossSpin = gsap.timeline({ repeat: -1 });
      const mainTimeline = gsap.timeline();
      // crossSpin.to(box, { rotate: 360, duration: 5, ease: "linear" });

      // mainTimeline.from(box, {
      //   scrollTrigger: {
      //     trigger: box,
      //     start: "top 90%",
      //     end: "25% 50%",
      //     // toggleActions: "play none none reverse",
      //     scrub: true
      //   },
      //   y: 100,
      //   opacity: 0,
      //   stagger: 0.5,
      //   duration: 1
      // });

      // mainTimeline.from(box, {
      //   scrollTrigger: {
      //     trigger: box,
      //     start: "top center",
      //     end: "30% 50%",
      //     toggleActions: "play none none reverse",
      //     scrub: true
      //   },
      //   y: -100,
      //   opacity: 0,
      //   duration: 1,
      //   stagger: 0.25,
      //   ease: "linear"
      // });

    }, []);

    return (
      <>
        <TimelineItem    >
          <TimelineSeparator  >
            <TimelineDot variant="outlined" sx={{ border: "none" }} >
              <Avatar alt="Seedling" sx={{ backgroundColor: defaultColors?.backgroundColor, }}   >
                <img src={seedlingIcon} style={{ width: '30px', height: '30px' }} />
              </Avatar>
            </TimelineDot>
            <TimelineConnector sx={{ width: 1.5 }} />
          </TimelineSeparator>
          <TimelineContent>
            <Box>
              <h1 style={{ color: defaultColors?.subHeaderColor, marginTop: 5, marginBottom: 25 }} > Seedling
                <p style={{ color: defaultColors?.color, fontWeight: 500, margin: 0, padding: 0, fontSize: 18 }} >it Weather</p>
              </h1>
              <img src={seedlingImage1} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px"
              }} />
              <p style={{}}>
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
              <h1 style={{ color: defaultColors?.subHeaderColor, marginTop: 5, marginBottom: 25 }} > Seedling
                <p style={{ color: defaultColors?.color, fontWeight: 500, margin: 0, padding: 0, fontSize: 18 }} >it Weather</p>
              </h1>

              <img src={seedlingImage2} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px",
                // border: "solid 5px #FFF",
                // boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
              }} />
              <p style={{}}>
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
              <h1 style={{ color: defaultColors?.subHeaderColor, marginTop: 5, marginBottom: 25 }} > Seedling
                <p style={{ color: defaultColors?.color, fontWeight: 500, margin: 0, padding: 0, fontSize: 18 }} >it Weather</p>
              </h1>
              <img src={seedlingImage3} style={{
                width: '280px',
                height: "auto",
                borderRadius: "10px"
              }} />
              <p style={{}}>
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

  return (
    <>
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
    </>
  )
}

export default Index