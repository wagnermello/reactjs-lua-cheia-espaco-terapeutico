import React from 'react'
import images from '../../constants/images'
import { motion } from 'framer-motion'
import './Instituto.scss'

function Instituto() {
  return (
    <section className="container__instituto app__wrapper">
      <div className="container__imagem">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <img src={images.maraca} alt="" />
        </motion.div>
      </div>
      <div className="container__texto">
        <h1 className="title">Instituto Espiritual Xamânico Lua Cheia</h1>
        <br />
        <br />
        <p className="p-text">
          O <strong>Lua Cheia Espaço Terapêutico</strong> surgiu em 2017 do
          desejo de integrar e oferecer, em um único espaço, os saberes
          terapêuticos da <strong>Renata Ilha</strong>.
          <br />
          <br />
          Psicóloga de formação, buscadora e aprendiz no{' '}
          <strong>caminho xamânico</strong>, associou suas experiências como
          mestre reiki e como doula aos cuidados e atenção oferecidos às pessoas
          que recebe.
          <br />
          <br />
          No ano seguinte, o Lua Cheia ampliou sua abordagem de acolhimento com
          a chegada do <strong>Cristiano Dullius</strong>. Babalorixá há 30
          anos, agregou suas vivências espirituais e espiritualistas ao trabalho
          prestado aos clientes.
          <br />
          <br />
          Desta união, abençoada pela sincronicidade do destino, se
          estabeleceram os dois pilares dos serviços propostos pelo Lua Cheia: o
          <strong>pilar terapêutico</strong> e o{' '}
          <strong>pilar espiritualista</strong>. Como costuma dizer o Cristiano
          “o sonho de Deus se realiza quando a ciência e a espiritualidade se
          encontram e caminham juntas”.
        </p>
        <br />
        <br />

        <button href="#" className="button-purple">
          ENTRAR EM CONTATO
        </button>
      </div>
    </section>
  )
}

export default Instituto
