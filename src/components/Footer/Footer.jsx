import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";

import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer app__wrapper">
			<motion.div
				className="flex__column__center container__wrapper gap__y32"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<h1 className="title-white">Contato</h1>
				<div>
					<p className="p-text-white-bold">Está com alguma dúvida?</p>
					<p className="p-text-white">
						Fale diretamente conosco no WhatsApp ou nas Redes Sociais:
					</p>
				</div>
				<div className="social-media-icons flex__row__center gap__x16">
					<img src={images.whatsapp_icon} alt="ícone do whatsapp" />
					<img src={images.facebook_icon} alt="ícone do facebook" />
					<img src={images.instagram_icon} alt="ícone do instagram" />
				</div>
				<p className="p-text-white-bold">51 9 8925 3468</p>
			</motion.div>
		</footer>
	);
}

export default Footer;
