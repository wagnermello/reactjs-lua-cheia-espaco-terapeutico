import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./Benzimentos.scss";

function Benzimentos() {
	return (
		<section className="benzimentos app__wrapper">
			<motion.div
				className="benzimentos__container container__wrapper flex__row__center gap__x64"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="benzimentos__image-container">
					<img src={images.velas} alt="velas" />
				</div>
				<div className="benzimentos__text-container flex__column__start gap__y32">
					<h1 className="title">Passes e Benzimentos</h1>
					<img src={images.velas} alt="velas" />
					<p className="p-text">
						Atendimento solidário que acontece todas às <b>terças-feiras</b>, na
						irradiação da <b>Umbanda</b>, ancorado pelo <b>Reiki</b> e pelas{" "}
						<b>Medicinas da Floresta</b>. O atendimento acontece por ordem de
						chegada, a <b>partir das 20h</b>, e a contribuição é a doação de
						velas para o trabalho.
					</p>
					<button className="button-purple">SAIBA MAIS</button>
				</div>
			</motion.div>
		</section>
	);
}

export default Benzimentos;
