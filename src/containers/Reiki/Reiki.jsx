import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./Reiki.scss";

function Reiki() {
	return (
		<section className="reiki app__wrapper">
			<motion.div
				className="reiki__container container__wrapper gap__x64"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="reiki__text-container flex__column__center gap__y32">
					<h1 className="title">Reiki</h1>
					<img src={images.reiki} alt="reiki" />
					<p className="p-text">
						O <b>REIKI</b> é uma técnica auxiliar nas <b>CURAS físicas</b>,{" "}
						<b>mentais</b>, <b>emocionais</b> e energéticas. O atendimento com o
						REIKI é feito pelos terapeutas Cristiano Dullius ou Renata Ilha.
						Eles utilizam ferramentas xamânicas para complementar o atendimento:
						cristais, incensos, ervas, óleos essenciais ou defumação, conforme a
						necessidade.
					</p>
					<button className="button-purple">AGENDAR REIKI</button>
				</div>
				<div className="reiki__image-container flex__column__center">
					<img src={images.reiki} alt="reiki" />
				</div>
			</motion.div>
		</section>
	);
}

export default Reiki;
