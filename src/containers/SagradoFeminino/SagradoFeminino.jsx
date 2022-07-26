import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { Button } from "../../components/Button/Button";

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
					<Button
						buttonStyle="button-purple"
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=555181339066&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Sagrado%20Feminino...",
								"_blank"
							)
						}
						type="button"
					>
						SAIBA MAIS
					</Button>
				</div>
				<div className="sagrado-feminino__image-container flex__column__center">
					<img src={images.sagrado_feminino} alt="sagrado feminino" />
				</div>
			</motion.div>
		</section>
	);
}

export default SagradoFeminino;
