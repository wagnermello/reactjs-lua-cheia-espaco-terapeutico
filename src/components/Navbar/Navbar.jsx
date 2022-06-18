import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.scss';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
   <nav className="app__navbar">
    <div className="app__navbar-logo">
      <img src={images.logo} alt="Logo Lua Cheia Espaço Terapêutico" />
    </div>
    <div>
      <ul>
        <li><a href='#inicio'>Início</a></li>
        <li><a href='#atendimentos'>Atendimentos</a></li>
        <li><a href='#medicinas-da-floresta'>Medicinas da Floresta</a></li>
        <li><a href='#depoimentos'>Depoimentos</a></li>
        <li><a href='#contato'>Contato</a></li>
      </ul>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)}/>

      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={24} className="app__navbar-smallscreen_overlay__close" onClick={() => setToggleMenu(false)} />
        <ul>
          <li><a href='#inicio'>Início</a></li>
          <li><a href='#atendimentos'>Atendimentos</a></li>
          <li><a href='#medicinas-da-floresta'>Medicinas da Floresta</a></li>
          <li><a href='#depoimentos'>Depoimentos</a></li>
          <li><a href='#contato'>Contato</a></li>
        </ul>
        </div>
        )}

    </div>
   </nav>
  )
}

export default Navbar