import React from 'react'
import './Botbotom.css'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function Botbotom (){
    return(
    <a href='#Navbar'>
    <Box sx={{ '& > :not(style)': { m: 1 },
    marginLeft:30,
    
    
    
     }}>
        <Fab id="BotomUp" size="medium"  aria-label="add" sx={{
            position: 'fixed', 
            bottom: 20,
             right: '20%',
             backgroundColor:"#FFC31F"
        }}
         >
            <ArrowCircleUpIcon sx={{
                fontSize:"4rem",
                color: "#003049"
            }} />
        </Fab>
      </Box>
      </a>
    )
}

export default Botbotom;