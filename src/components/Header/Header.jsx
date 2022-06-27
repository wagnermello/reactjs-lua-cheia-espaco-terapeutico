import React from 'react'
import { motion } from 'framer-motion'
import images from '../../constants/images'

import './Header.scss'

function Header() {
  return (
    <div className='header app__wrapper'> 
        <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1, delay: 0.1 }}

            >
        <img src={images.logo_hero} alt='Logo Instituto Espiritual Xamânico Lua Cheia' />
      </motion.div>

    

    </div>


  )
}

export default Header