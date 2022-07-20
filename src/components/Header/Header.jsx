import React from "react";
import { motion } from "framer-motion";
import images from "../../constants/images";

import "./Header.scss";

function Header() {
	return (
		<div className="header app__wrapper">
			<motion.div
				className="flex__center"
				whileInView={{ opacity: [0, 1] }}
				transition={{ duration: 1, delay: 0.1 }}
			>
				<img
					className="header__logo"
					src={images.logo_header}
					alt="Logo Instituto Espiritual Xamânico Lua Cheia"
				/>
			</motion.div>
		</div>
	);
}

export default Header;
