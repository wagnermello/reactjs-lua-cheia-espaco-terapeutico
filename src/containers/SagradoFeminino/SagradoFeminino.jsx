import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./SagradoFeminino.scss";

function SagradoFeminino() {
	return (
		<section className="sagrado-feminino app__wrapper">
			<motion.div
				className="sagrado-feminino__container container__wrapper gap__x64"
				whileInView={{ translateY: [100, 50, 1], opacity: [0, 0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<div className="sagrado-feminino__text-container flex__column__center gap__y32">
					<h1 className="title">Sagrado Feminino</h1>
					<img src={images.sagrado_feminino} alt="sagrado feminino" />
					<p className="p-text">
						Conduzida pela Renata Ilha, é um encontro que complementa os,{" "}
						<b> estudos dos Saberes Femininos</b>, honrando nossas ancestrais.{" "}
						<br />
						<br />A Cerimônia do Sagrado Feminino é{" "}
						<b>exclusiva para mulheres</b>. Acontece geralmente no{" "}
						<b>TERCEIRO final de semana de cada mês</b>.
					</p>
					<button className="button-purple">SAIBA MAIS</button>
				</div>
				<div className="sagrado-feminino__image-container flex__column__center">
					<img src={images.sagrado_feminino} alt="sagrado feminino" />
				</div>
			</motion.div>
		</section>
	);
}

export default SagradoFeminino;
