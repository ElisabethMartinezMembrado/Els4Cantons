import React from 'react'
import './Contacto.css'
import Typography from '@mui/material/Typography';
import NavigationIcon from '@mui/icons-material/Navigation';
import PhoneIcon from '@mui/icons-material/Phone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


function Contacto (){

    return(
        <div id='ContactoRout'>
            <Typography variant='h4'
            sx={{
                backgroundColor: "#A7E8BD",
                paddingTop:4,
                fontSize: "2rem",
                fontFamily:'MayusAccentos',
                paddingLeft: 2,
                paddingRight:3,
                color:"#023047",
            }}>
                <NavigationIcon sx={{fontSize:"2rem",
                color:"#FB8500"}}/>
                Avenida del rastrillo Nº9, Cardona, España.           
            </Typography>
            <Typography variant='h4'
            sx={{
                backgroundColor: "#A7E8BD",
                paddingTop:4,
                fontSize: "2rem",
                fontFamily:'MayusAccentos',
                paddingLeft: 2,
                paddingRight:2,
                color:"#023047",
            }}>
                <PhoneIcon sx={{fontSize:"2rem",
                color:"#FB8500",
                marginRight:1,}}/>
                938 69 08 13</Typography>
            <Typography variant='h4'
            sx={{
                backgroundColor: "#A7E8BD",
                paddingTop:2,
                fontSize: 35,
                fontFamily:'MayusAccentos',
                paddingLeft: 4,
                paddingRight:4,
                paddingBottom:2,
                color:"#023047",
            }}><QueryBuilderIcon sx={{ fontSize:"2rem",
                marginBottom:-2,
                color:"#FB8500"
             }}/>
                <p>Lunes	13:00-15:00</p>
                <p>Martes - Cerrado</p>
                <p>Miércoles - Cerrado</p>
                <p>Jueves	13:00-15:00 20:00-22:30</p>
                <p>Viernes	13:00-15:00 20:00-22:30</p>
                <p>Sábado	13:00-15:30 20:00-22:30</p>
                <p>Domingo	13:00-15:30 20:00-22:00</p>
            </Typography>
            <a target="_blank" rel="noopener noreferrer" href='https://www.facebook.com/els4cantonscardona'>
                <Typography variant='h4'
                    sx={{
                        backgroundColor: "#A7E8BD",
                        paddingTop:2,
                        fontSize: "2rem",
                        fontFamily:'MayusAccentos',
                        paddingLeft: 2,
                        paddingRight:1,
                        color:"#023047",
                    }}>
                    
                    
                        <FacebookIcon  
                            sx={{fontSize:"2rem",
                        color:"#FB8500",
                        marginRight:1,}}/>
                    els4cantonscardona
                </Typography>
            </a>
            <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/els4cantons/?igshid=YmMyMTA2M2Y%3D'>
                <Typography variant='h4'
                    sx={{
                        backgroundColor: "#A7E8BD",
                        paddingTop:2,
                        marginTop:-2,
                        fontSize: "2rem",
                        fontFamily:'MayusAccentos',
                        paddingLeft: 2,
                        paddingRight:1,
                        color:"#023047",
                        paddingBottom:5,
                    }}>
                    
                    
                        <InstagramIcon
                            sx={{fontSize:"2rem",
                        color:"#FB8500",
                        marginRight:1,
                        paddingTop:1,
                        
                        }}/>
                    els4cantonscardona
                </Typography>
            </a>
        </div>
    )
}

export default Contacto;