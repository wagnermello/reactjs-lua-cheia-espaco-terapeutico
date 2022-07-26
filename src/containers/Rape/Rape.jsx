import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";
import { Button } from "../../components/Button/Button";

import "./Rape.scss";

function Rape() {
	return (
		<section className="rape app__wrapper">
			<motion.div
				className="rape__container container__wrapper"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<div className="rape__image-container flex__column__center gap__x64">
					<img src={images.rape} alt="" />
				</div>
				<div className="rape__text-container flex__column__start gap__y32">
					<h1 className="title">Rapé</h1>
					<p className="p-text">
						Medicina que ancora as cerimônias de Ayahuasca e os trabalhos
						espiritualistas. <b>Temos disponível</b> para venda em{" "}
						<b> pronta-entrega</b> os
						<b>Rapés da Pôr-do-sol Expansão</b>. Podem ser adquiridos também
						pelo <b>link EXCLUSIVO</b> para clientes do Lua Cheia. Com ele você
						acessa descontos especiais direto no site da Pôr-do-Sol, onde
						encontra toda a linha de produtos e vestimentas xamânicas:
					</p>
					<Button
						buttonStyle="button-purple"
						onClick={() =>
							window.open(
								"https://www.pordosolexpansao.com.br/?coupon=LUACHEIA",
								"_blank"
							)
						}
						type="button"
					>
						USAR CUPOM
					</Button>
				</div>
			</motion.div>
		</section>
	);
}

export default Rape;
