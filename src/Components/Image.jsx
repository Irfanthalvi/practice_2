/**
 * @description      : 
 * @author           : computer
 * @group            : 
 * @created          : 29/11/2024 - 14:39:02
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 29/11/2024
 * - Author          : computer
 * - Modification    : Adjusted button styles and layout.
 **/
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import { FaDownload } from "react-icons/fa";
import { PiUserCheckFill } from 'react-icons/pi';

const Root = styled(Box)(({ theme }) => ({
    '.box': {
        display: 'flex',
        justifyContent: 'center', // Centers content horizontally
        alignItems: 'center', // Centers content vertically
        height: '99%', // Full viewport height
        width: '99%',
        position: 'absolute',
        top: "20%",
        left:"0 auto",
    },
    '.firstline': {
        position: 'absolute',
        top: "5%",
        fontWeight: "bold",
        fontSize: "3vw",
    },
    '.secoundline': {
        position: 'absolute',
        top: "15%",
        fontWeight: "small",
        color: "#0d3559",
    },
    '.firstbtn': {
        position: 'absolute',
        top: '34%', // Adjusted for two-line alignment
        right: '17%',
        backgroundColor: '#9500ae',
        color: 'white',
        padding: '1%',
        fontWeight: 'bold',
        borderRadius: '5px',
    },
    '.firstbtn:hover': {
        boxShadow: "1px 1px 10px 1px #9500ae",
    },
    
    '.secoundbtn': {
        position: 'absolute',
        top: "48%", // Adjusted for better spacing
        right: "17%",
        backgroundColor: "#0d3559",
        color: "white",
        padding: "1%",
        fontWeight: "bold",
        borderRadius:"5px",

    },
    '.secoundbtn:hover': {
        boxShadow: "1px 1px 10px 1px #0d3559",
    },
}));

const Image = () => {
    const backgroundStyle = {
        backgroundImage: `url(${require('./map.png')})`, // Ensure map.png is in the public folder
        backgroundSize: 'cover', // Ensures the image covers the div
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents repeating the image
        height: '50vh', // Set height to 50% of the viewport height
        width: '60vw', // Set width to 50% of the viewport width
        display: 'flex',
        justifyContent: 'center', // Centers content horizontally
        alignItems: 'center', // Centers content vertically
        fontSize: '24px', // Example font size
    };

    return (
        <Root>
            <Box className="box">
                <div style={backgroundStyle}>
                    <span className="firstline">
                        Open Source ERP & CRM for business<br />
                    </span>
                    <span className="secoundline">
                        (SMEs, Large Companies, Freelancers, Foundations)
                    </span>
                    <Button className="firstbtn">
                        <span >
                            <PiUserCheckFill />
                        </span>
                        Test Online
                    </Button>
                    <Button className="secoundbtn">
                        <span style={{ marginRight: "7%" }}>
                            <FaDownload />
                        </span>
                        Download
                    </Button>
                </div>
            </Box>
        </Root>
    );
};

export default Image;
