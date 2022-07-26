import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { Button } from "../../components/Button/Button";

import "./Ayahuasca.scss";

function ayahuasca() {
	return (
		<section className="ayahuasca app__wrapper">
			<motion.div
				className="ayahuasca__container container__wrapper gap__x64"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="ayahuasca__text-container flex__column__center gap__y32">
					<h1 className="title">Ayahuasca</h1>
					<p className="p-text">
						As cerimônias de AYAHUASCA no Lua Cheia têm uma abordagem
						terapêutica e espiritualista. Elas acontecem sistematicamente, com
						temáticas distintas.
					</p>
					<Button
						buttonStyle="button-purple"
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=555181339066&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Cerim%C3%B4nia%20de%20Ayahuasca...",
								"_blank"
							)
						}
						type="button"
					>
						AGENDAR CERIMÔNIA
					</Button>
				</div>
				<div className="ayahuasca__image-container flex__column__center">
					<img src={images.tambor_xamanico} alt="ayahuasca" />
				</div>
			</motion.div>
		</section>
	);
}

export default ayahuasca;
