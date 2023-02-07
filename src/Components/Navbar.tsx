import React from "react";
import './Navbar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';




function Navbar (){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
    return(
        < >
        <Box sx={{ 
           
            width: "100%",

             }}>
      <AppBar id="Navbar" position="static">
        
        <Toolbar sx={{backgroundColor: "#FFFFFF",
                        }} >
        <img id="Logo" src="Logo4cantons.png" alt="Els 4 Cantons" height={100} width={100}   />
        
          
        </Toolbar>
      </AppBar>
      
        <Toolbar sx={{backgroundColor: "#8DE2AA",
                        width:"100%",
                        }} >
        < a href="#ContactoRout">
            <Button
                sx={{
                    color: "#FFFFFF",
                    fontSize:"18px",
                    fontFamily: "Domicilio", 
                    marginX: 1,
                }}
                
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                CONTACTO
            </Button>
        </a>
            < a href="#MenuRout">
            <Button
               sx={{color: "#FFFFFF",
                        fontSize:"18px",
                        fontFamily: "Domicilio", 
                        marginX: 1,
                    }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                CARTA
            </Button>
            </a>
            < a href="#DeliveryRout">
              <Button
                sx={{color: "#FFFFFF",
                      fontSize:"18px",
                      fontFamily: "Domicilio", 
                      marginX: 2,
                  }}
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
              >
                  DELIVERY
              </Button>
            </a>
          
        </Toolbar>
        
        
    </Box>
    </>
    )
}

export default Navbar;