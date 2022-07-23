import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./Ayahuasca.scss";

function ayahuasca() {
	return (
		<section className="ayahuasca app__wrapper">
			<motion.div
				className="ayahuasca__container container__wrapper gap__x"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="ayahuasca__text-container flex__column__start gap__y">
					<h1 className="title">Ayahuasca</h1>
					<img src={images.tambor_xamanico} alt="ayahuasca" />
					<p className="p-text">
						As cerimônias de AYAHUASCA no Lua Cheia têm uma abordagem
						terapêutica e espiritualista. Elas acontecem sistematicamente, com
						temáticas distintas.
					</p>
					<button className="button-purple">AGENDAR CERIMÔNIA</button>
				</div>
				<div className="ayahuasca__image-container flex__column__center">
					<img src={images.tambor_xamanico} alt="ayahuasca" />
				</div>
			</motion.div>
		</section>
	);
}

export default ayahuasca;
