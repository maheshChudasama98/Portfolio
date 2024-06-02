import { Box, Typography } from '@mui/material'
import React from 'react'
import logoLight from "../../assets/logos/logoLight.png"
import video from "../../assets/videos/video1.mp4"


const Index = () => {
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
        </>
    )
}

export default Index