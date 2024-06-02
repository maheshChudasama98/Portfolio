import React, { useEffect, useRef } from 'react'


import html from "../../assets/skills/html.png"
import css from "../../assets/skills/css.png"
import javascript from "../../assets/skills/javascript.png"
import bootstrap from "../../assets/skills/bootstrap.png"
import reactjs from "../../assets/skills/reactjs.png"
import redux from "../../assets/skills/redux.png"
import formik from "../../assets/skills/formik-icon.png"
import material from "../../assets/skills/material-ui.png"
import nodejs from "../../assets/skills/nodejs.png"
import expressjs from "../../assets/skills/expressjs.png"
import mongodb from "../../assets/skills/mongodb.png"
import mysql from "../../assets/skills/mysql.png"
import github from "../../assets/skills/github.png"

import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
const Index = ({ defaultColors }) => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <>
      <div style={{ display: "ruby" }}>
        {skillsList && skillsList.length > 0 && skillsList.map((item, key) => {
          const imageRef = useRef(null);

          // useEffect(() => {

          //   const image = imageRef.current;

          //   gsap.set(image, { opacity: 0, x: -100 });

          //   // gsap.to(image, {
          //   //   scrollTrigger: {
          //   //     backgroundPositionX: "0%",
          //   //     trigger: image,
          //   //     start: 'top 80%',
          //   //     end: 'bottom 20%',
          //   //     // stagger: 1,
          //   //     scrub: true,
          //   //     onEnter: function () {
          //   //       gsap.fromTo(
          //   //         image,
          //   //         { x: -100, autoAlpha: 0 },
          //   //         {
          //   //           duration: 1,
          //   //           x: 0,
          //   //           autoAlpha: 1,
          //   //           ease: "back",
          //   //           overwrite: "auto"
          //   //         }
          //   //       );
          //   //     },
          //   //     onEnterBack: function () {
          //   //       gsap.fromTo(
          //   //         image,
          //   //         { x: -100, autoAlpha: 0 },
          //   //         {
          //   //           duration: 1.25,
          //   //           x: 0,
          //   //           autoAlpha: 1,
          //   //           ease: "back",
          //   //           overwrite: "auto"
          //   //         }
          //   //       );
          //   //     },
          //   //     onLeaveBack: function () {
          //   //       gsap.fromTo(image, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
          //   //     }
          //   //   },
          //   //   opacity: 1,
          //   //   duration: 1.5,
          //   //   delay: 0.2 * key,
          //   //   ease: 'power3.out',
          //   // });
          //   gsap.to(image, {
          //     opacity: 1,
          //     x: 0,
          //     duration: 0.5,
          //     ease: 'power3.out',
          //     delay: 0.2 * key,
          //   });

          // }, []);

          useEffect(() => {
            const image = imageRef.current;

            gsap.set(image, { opacity: 0, x: -100 });

            gsap.to(image, {
              // ease: 'power3.out',
              // duration: 1,
              // opacity: 1,
              // stagger: 1,
              // delay: 0.2 * key,
              scrollTrigger: {
                trigger: image,
                start: 'top 80%',
                end: 'bottom 20%',
                scrub: true, // Remove this line in production
                onEnter: function () {
                  gsap.fromTo(
                    image,
                    { opacity: 0, x: -100 },
                    {
                      opacity: 1,
                      x: 0,
                      duration: 0.5,
                      delay: 0.1 * key,
                      ease: "power3.out",
                      overwrite: "auto"
                    }
                  );
                },
                onEnterBack: function () {
                  gsap.fromTo(
                    image,
                    { x: -100, opacity: 0 },
                    {
                      x: 0,
                      opacity: 1,
                      duration: 0.5,
                      delay: 0.1 * key,
                      ease: "power3.out",
                      overwrite: "auto"
                    }
                  );
                },
                onLeaveBack: function () {
                  gsap.fromTo(image,
                    { opacity: 1, x: 0, },
                    { opacity: 0, overwrite: "auto" });
                }
              },
            });
          }, []);

          return (
            <div key={key} style={{ margin: "20px" }} ref={imageRef}>
              <img src={item?.image} width={"80px"} height={"auto"} />
              <h5 style={{ textAlign: "center", color: defaultColors?.color }}>{item?.title}</h5>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Index