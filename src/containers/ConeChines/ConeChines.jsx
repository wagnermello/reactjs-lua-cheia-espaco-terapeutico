import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { Button } from "../../components/Button/Button";

import "./ConeChines.scss";

function ConeChines() {
	return (
		<section className="cone-chines app__wrapper">
			<motion.div
				className="cone-chines__container container__wrapper gap__x64"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<div className="cone-chines__image-container flex__column__center">
					<img src={images.cone_chines} alt="cone chinês" />
				</div>
				<div className="cone-chines__text-container flex__column__start gap__y32">
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
					<Button
						buttonStyle="button-purple"
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=555181339066&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Cone%20Chin%C3%AAs...",
								"_blank"
							)
						}
						type="button"
					>
						AGENDAR CONE CHINÊS
					</Button>
				</div>
			</motion.div>
		</section>
	);
}

export default ConeChines;
