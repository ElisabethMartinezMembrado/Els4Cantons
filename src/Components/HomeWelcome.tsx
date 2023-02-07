import React from "react";
import './HomeWelcome.css';
import '.././fonts/Contre-poincon.ttf';
import Typography from '@mui/material/Typography';

function HomeWelcome (){
    return(
        <>
        
            <div id="WelcomeCard">
                    <div className="TxtWelcome" >
                    <Typography sx={{fontFamily: 'WelcomeText',
                color: "#023047",
                fontSize:24}}> 
                    Ven a Cardona y descubre nuestro restaurante Els 4 Cantons. 
                    Donde podrás disfrutar de comida casera en un acogedor local clásico con una bonita bóveda catalana. 
                    Justo delante del magnífico Castillo de Cardona. </Typography>
                    <Typography sx={{fontFamily: 'Prueba',
                                    color: "#023047",
                                    fontSize:27,
                                    marginLeft:1,
                                    marginRight:1,
                                    marginTop:2,}}> 
                    Dsfruta nuestras increibles pizzas hechas con horno de piedra, o con el resto de nuestra deliciosa carta.
                    </Typography>

                    </div>
            </div>
        </>
    )

}

export default HomeWelcome;