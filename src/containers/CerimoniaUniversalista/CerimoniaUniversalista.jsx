import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { Button } from "../../components/Button/Button";

import "./CerimoniaUniversalista.scss";

function CerimoniaUniversalista() {
	return (
		<section className="cerimonia-universalista app__wrapper">
			<motion.div
				className="cerimonia-universalista__container container__wrapper gap__x64"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<div className="cerimonia-universalisa__image-container flex__column__center">
					<img src={images.lua} alt="lua" />
				</div>
				<div className="cerimonia-universalista__text-container flex__column__start gap__y32">
					<h1 className="title-white">Cerimônia Universalista</h1>
					<img src={images.lua} alt="lua" />

					<p className="p-text-white">
						Conduzida pelo
						<b className="p-text-white-bold"> Cristiano Dullius </b> e pela
						<b className="p-text-white-bold"> Renata Ilha </b> é um
						<b className="p-text-white-bold">
							{" "}
							trabalho de honra e reverência a todos os caminhos e Egrégoras
						</b>{" "}
						que fazem parte da história das
						<b className="p-text-white-bold">
							{" "}
							Sagradas Medicinas da Floresta{" "}
						</b>
						. Este trabalho inspira a nossa caminhada de evolução do Ser
						Integral. <br /> <br />A Cerimônia Universalista é aberta para
						homens e mulheres. Acontece
						<b className="p-text-white-bold"> geralmente </b> no
						<b className="p-text-white-bold">
							{" "}
							PRIMEIRO final de semana de cada mês
						</b>
						.
					</p>
					<Button
						buttonStyle="button-white"
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=555181339066&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Cerim%C3%B4nia%20Universalista...",
								"_blank"
							)
						}
						type="button"
					>
						AGENDAR CERIMÔNIA
					</Button>
				</div>
			</motion.div>
		</section>
	);
}

export default CerimoniaUniversalista;
