import { React } from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import "./Atendimentos.scss";

function Atendimentos() {
	return (
		<section className="atendimentos app__wrapper">
			<div className="atendimentos__container container__wrapper flex__column__center gap__y">
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 1, delay: 0.1 }}
				>
					<h1 className="title">Atendimentos</h1>
				</motion.div>
				<div className="flex__row__center">
					<motion.div
						className="flex__center__column"
						whileInView={{ x: [-100, -50, 0], opacity: [0, 0, 1] }}
						transition={{ duration: 0.5 }}
					>
						<img
							className="imagem__atendimento-presencial"
							src={images.icone_atendimento_presencial}
							alt=""
						/>
						<p className="p-text-purple">Presencial</p>
					</motion.div>
					<motion.div
						className="flex__center__column"
						whileInView={{ x: [100, 50, 0], opacity: [0, 0, 1] }}
						transition={{ duration: 0.5 }}
					>
						<img src={images.icone_atendimento_online} alt="" />
						<p className="p-text-purple">Online</p>
					</motion.div>
				</div>
				<motion.div
					className="flex__center__column"
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 1, delay: 0.1 }}
				>
					<p className="p-text-purple">
						Para o seu <b className="p-text-purple-bold">maior conforto</b>,
						atendemos de forma
						<b className="p-text-purple-bold"> presencial</b> ou
						<b className="p-text-purple-bold"> online</b>.
					</p>
					<p className="p-text-purple">
						Confira abaixo os nossos atendimentos:
					</p>
				</motion.div>
			</div>
		</section>
	);
}

export default Atendimentos;
