import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./ConeChines.scss";

function ConeChines() {
	return (
		<section className="cone-chines app__wrapper">
			<motion.div
				className="cone-chines__container flex__center"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="cone-chines__image">
					<img src={images.cone_chines} alt="cone chinês" />
				</div>
				<div className="cone-chines__text">
					<h1 className="title">Cone Chinês</h1>
					<img src={images.cone_chines} alt="cone chinês" />
					<p className="p-text">
						É uma <b>terapia natural</b> usada para desobstrução do ouvido,
						nariz e garganta, promovendo a limpeza dos canais energéticos.
						<br />
						<br />É uma <b>técnica milenar</b>, presente em diversas culturas. A
						aplicação é feita com um cone de tecido de algodão modelado com cera
						de abelha e própolis encaixado na parte externa do ouvido.
						<br />
						<br />
						Na extremidade, o terapeuta acende uma chama e vai supervisionando
						sua queima até uma altura segura.{" "}
						<b>É indicado para todas as idades</b>.
					</p>
					<button className="button-purple">AGENDAR CONE CHINÊS</button>
				</div>
			</motion.div>
		</section>
	);
}

export default ConeChines;
