import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";

import "./MedicinasFloresta.scss";

function MedicinasFloresta() {
	return (
		<section className="medicinas-floresta app__wrapper">
			<motion.div
				className="medicinas-floresta__container flex__column__center	 container__wrapper gap__y"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<h1 className="title">Medicinas da Floresta</h1>
				<img src={images.ayahuasca} alt="medicinas da floresta" />
			</motion.div>
		</section>
	);
}

export default MedicinasFloresta;
