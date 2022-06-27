import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../constants/images'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={images.logo} alt="Espaço Terapêutico Lua Cheia" />
      <div>
        <Link to="/">Home</Link>
        <Link to="/atendimentos">Atendimentos</Link>
        <Link to="/medicinas-da-floresta">Medicinas da Floresta</Link>
        <Link to="/localizacao">Localização</Link>
        <Link to ="#footer">Contato</Link>
      </div>
    </div>
  )
}

export default Navbar
     
     
     
     //<img src={images.logo} alt="Logo Lua Cheia Espaço Terapêutico" />