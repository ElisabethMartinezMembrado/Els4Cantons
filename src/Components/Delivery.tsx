import React from 'react'
import './Delivery.css'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '.././fonts/hemiheadbdit.otf';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

function Delivery (){
    return(
        <div id='DeliveryRout'>
            <Box sx={{
                width:"375px",
                marginBottom:2,
                backgroundColor: "#003049",
                

            }} >
                <Typography sx={{
                    paddingTop:5,
                    fontFamily: "Domicilio",
                    color: "#F77F00",
                    fontSize:"1.5rem",
                    paddingLeft:3,
                    paddingRight:3,
                }}>Ofrecemos servicio a domicilio por la noche en el pueblo de Cardona y El barrio de la Coromina.
                Más allá de los alrededores, póngase en contacto con el local para consultar.
                </Typography>
                
                <Typography sx={{
                    marginTop:3,
                    fontFamily: "MayusAccentos",
                    color: "#FFC31F",
                    fontSize:"2rem",
                    paddingLeft:2,
                    paddingRight:2,
                    
                }}> 
                En nuestra carta encontrarás este símbolo:
                
            
                </Typography>
                <DeliveryDiningIcon sx={{fontSize:"2rem",
                                        color:"#FB8500",
                                        marginLeft:1,
                                        marginTop:3,
                }}/>
                <Typography sx={{
                    marginTop:3,
                    fontFamily: "MayusAccentos",
                    color: "#A7E8BD",
                    fontSize:"2rem",
                    paddingLeft:2,
                    paddingRight:2,
                    
                }}> 
               
                 Este te mostrará que platos puedes pedir para delivery.
                </Typography>
                < a href="#MenuRout">
                <Typography sx={{
                    paddingTop:5,
                    fontFamily: "Domicilio",
                    color: "#FCBF49",
                    fontSize:"1.5rem",
                    paddingLeft:3,
                    paddingRight:3,
                    paddingBottom:5,
                }}>Ver la Carta
                </Typography>
                </a>
            </Box>
        </div>
    )
}

export default Delivery;