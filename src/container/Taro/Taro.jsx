import React from "react";
import { motion } from "framer-motion";

import "./Taro.scss";

function Taro() {
	return (
		<section className="taro app__wrapper">
			<motion.div
				className="taro__container flex__center__column"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="title-white">Tarô</h1>
				<p className="p-text-white">
					É uma ferramenta muito especial para
					<b className="p-text-white-bold"> autoconhecimento</b> e
					<b className="p-text-white-bold"> inspiração</b>!
					<br />
					<br />O atendimento com o <b className="p-text-white-bold">TARÔ</b> é
					feito pelo terapeuta
					<b className="p-text-white-bold"> Cristiano Dullius</b> numa abordagem
					terapêutica.
					<br />
					<br />
					Ele parte da <b className="p-text-white-bold">numerologia</b> pessoal
					para interpretar as mensagens, conforme o momento que está passando.
				</p>
				<button className="button-white">AGENDAR TARÔ</button>
			</motion.div>
		</section>
	);
}

export default Taro;
