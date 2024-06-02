import { Box } from '@mui/material'
import React from 'react'

const Index = ({ defaultColors }) => {
    return (
        <>
            <Box>
                {/* <SubHeaderTag title={ } /> */}
                <h1 style={{ color: defaultColors?.subHeaderColor, }} > {'Software Development Engineer (SDE)'} </h1>
                <h3 style={{ color: defaultColors?.blackAndWight }}>Plusinfosys  <span style={{ color: defaultColors?.color, fontWeight: 100 }}>- Software Engineer</span> </h3>
                <p style={{}}>
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
        </>
    )
}

export default Index