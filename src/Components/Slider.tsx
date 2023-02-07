import React from "react";
import './Slider.css'
import Imagenes from "./Imagenes";
import { motion } from 'framer-motion'



function Slider (){
    return(
        <motion.div className='slider-container'>
        <motion.div className='slider' drag='x' 
        dragConstraints={{right: 0, left:-2123}} >
        {Imagenes.map(Imagenes => (
            <motion.div className='item'>
                <img src={Imagenes} alt="Imagenes" />
            </motion.div>
        ))}
        </motion.div>
        
    </motion.div>
    )
}
export default Slider;