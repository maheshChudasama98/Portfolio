import React, { useEffect, useRef } from 'react'
import { Box, Button, Grid } from '@mui/material'
import manImage from '../../assets/images/man.jpg';
import Typewriter from 'typewriter-effect';
import resume from '../../assets/resume/resume.jpg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from "gsap";
gsap.registerPlugin(ScrollTrigger,);

const Index = ({ defaultColors }) => {
    const boxRefRight = useRef(null);
    const boxRefLeft = useRef(null);

    const handleDownload = () => {
        const fileName = 'mahesh_chudasama_resume.jpg';
        const link = document.createElement('a');
        link.href = resume;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const fontStyle = {
        color: defaultColors?.color,
        textAlign: " justify",
        fontWeight: 0,
        fontSize: "18px"
    }

    useEffect(() => {
        const box = boxRefRight.current;
        const box2 = boxRefLeft.current;
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
                        { x: -150, autoAlpha: 0 },
                        {
                            duration: 1,
                            x: 0,
                            autoAlpha: 1,
                            ease: "back",
                            overwrite: "auto"
                        }
                    );
                },
                onEnterBack: function () {
                    gsap.fromTo(
                        box,
                        { x: -150, autoAlpha: 0 },
                        {
                            duration: 1.25,
                            x: 0,
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

        gsap.to(box2, {
            scrollTrigger: {
                backgroundPositionX: "0%",
                trigger: box2,
                start: 'top 80%',
                end: 'bottom 20%',
                stagger: 1,
                scrub: true,
                onEnter: function () {
                    gsap.fromTo(
                        box2,
                        { x: 150, autoAlpha: 0 },
                        {
                            duration: 1,
                            x: 0,
                            autoAlpha: 1,
                            ease: "back",
                            overwrite: "auto"
                        }
                    );
                },
                onEnterBack: function () {
                    gsap.fromTo(
                        box2,
                        { x: 150, autoAlpha: 0 },
                        {
                            duration: 1.25,
                            x: 0,
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
        <>
            <Grid container spacing={5} >
                <Grid item xs={12} lg={6} order={{ xs: 1, lg: 0 }} ref={boxRefRight} >
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
                </Grid>

                <Grid item xs={12} lg={6} order={{ xs: 0, lg: 1 }} ref={boxRefLeft}>
                    <Box sx={{
                        textAlign: "center",
                    }}>
                        <Box
                            sx={{
                                margin: "auto",
                                backgroundImage: `url('${manImage}')`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                height: 450,
                                width: 350,
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
        </>
    )
}
export default Index