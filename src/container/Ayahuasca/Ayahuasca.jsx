import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./Ayahuasca.scss";

function ayahuasca() {
	return (
		<section className="ayahuasca app__wrapper">
			<motion.div
				className="ayahuasca__container flex__center"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="ayahuasca__text">
					<h1 className="title">Ayahuasca</h1>
					<img src={images.tambor_xamanico} alt="ayahuasca" />
					<p className="p-text">
						As cerimônias de AYAHUASCA no Lua Cheia têm uma abordagem
						terapêutica e espiritualista. Elas acontecem sistematicamente, com
						temáticas distintas.
					</p>
					<button className="button-purple">AGENDAR CERIMÔNIA</button>
				</div>
				<div className="ayahuasca__image">
					<img src={images.tambor_xamanico} alt="ayahuasca" />
				</div>
			</motion.div>
		</section>
	);
}

export default ayahuasca;
