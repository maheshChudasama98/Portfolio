import React from 'react'
import { IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';
import logoDark from "../../assets/logos/logoDark.png"

import './style.css'
import styled from "@mui/material/styles/styled";

const Div = styled('div')({});

const Index = ({ themeCallBack }) => {
    const matchesTabletView = useMediaQuery('(max-width: 550px)');

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [flag, setFlag] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };

    const menuOptions = [
        { name: "Home", navigate: "Home", },
        { name: "Overview", navigate: "Overview", },
        { name: "Experience", navigate: "Experience", },
        { name: "Skills", navigate: "Skills", },
        { name: "Project", navigate: "Project", },
        { name: "Education", navigate: "Education", },
        { name: "Contact Us", navigate: "ContactUs", },
    ]
    useEffect(() => {
        if (themeCallBack) {
            themeCallBack(flag)
        }
    }, [flag])

    const handleClickNavigation = (option) => {
        const targetId = option?.navigate;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            handleClose()
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
        }
    };

    return (
        <>

            <Div className='header-main-div'  >
                <Div className='header-name-div' >
                    <img
                        style={{ width: "90px", height: "auto" }}
                        src={logoDark}
                    />
                </Div>

                <Div className='header-option-div'>
                    {!matchesTabletView ?
                        <ul>
                            {menuOptions.map((option, key) => (
                                <li key={key}>
                                    <h4
                                        onClick={() => handleClickNavigation(option)}
                                        style={{ margin: 0, fontWeight: 600 }}>
                                        {option?.name}
                                    </h4>
                                </li>
                            ))}
                            <label className="switch">
                                <span className="sun"><svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"><g fill="#ffd43b">
                                        <circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                                <span className="moon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                        <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                                <input type="checkbox" className="input" onChange={(event) => setFlag(!flag)} />
                                <span className="slider"></span>
                            </label>
                        </ul>
                        :
                        <>
                            <IconButton
                                aria-label="more"
                                id="long-button"
                                aria-controls={open ? 'long-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-haspopup="true"
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="long-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        width: '100%',
                                    },
                                }}
                            >
                                {menuOptions.map((option, key) => (
                                    <MenuItem key={key} onClick={() => handleClickNavigation(option)}>
                                        {option?.name || ''}
                                    </MenuItem>
                                ))}
                            </Menu>
                        </>}
                </Div>
            </Div >
        </>
    )
}
export default Index
