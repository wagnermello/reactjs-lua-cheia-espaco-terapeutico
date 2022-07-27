import React from "react";
import images from "../../constants/images";
import { motion } from "framer-motion";
import { Button } from "../../components/Button/Button";

import "./Instituto.scss";

function Instituto() {
	return (
		<section className="instituto__container app__wrapper">
			<motion.div
				className="container__wrapper flex__row gap__x"
				whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
				transition={{ duration: 0.5 }}
			>
				<div className="instituto__image-container flex__column__center responsive__container  ">
					<img src={images.maraca} alt="maracas xamânicas" />
				</div>
				<div
					id="test"
					className="instituto__text-container flex__column__start gap__y32 "
				>
					<h1 className="title">Instituto Espiritual Xamânico Lua Cheia</h1>
					<div className="p-text flex__column__start gap__y24">
						<p>
							O <strong>Lua Cheia Espaço Terapêutico</strong> surgiu em 2017 do
							desejo de integrar e oferecer, em um único espaço, os saberes
							terapêuticos da <strong>Renata Ilha</strong>.
						</p>
						<p>
							Psicóloga de formação, buscadora e aprendiz no{" "}
							<strong>caminho xamânico</strong>, associou suas experiências como
							mestre reiki e como doula aos cuidados e atenção oferecidos às
							pessoas que recebe.
						</p>
						<p>
							No ano seguinte, o Lua Cheia ampliou sua abordagem de acolhimento
							com a chegada do <strong>Cristiano Dullius</strong>. Babalorixá há
							30 anos, agregou suas vivências espirituais e espiritualistas ao
							trabalho prestado aos clientes.
						</p>
						<p>
							Desta união, abençoada pela sincronicidade do destino, se
							estabeleceram os dois pilares dos serviços propostos pelo Lua
							Cheia: o<strong> pilar terapêutico</strong> e o
							<strong> pilar espiritualista</strong>. Como costuma dizer o
							Cristiano “o sonho de Deus se realiza quando a ciência e a
							espiritualidade se encontram e caminham juntas”.
						</p>
					</div>
					<Button
						buttonStyle="button-purple"
						onClick={() =>
							window.open(
								"https://api.whatsapp.com/send?phone=555181339066&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es...",
								"_blank"
							)
						}
						type="button"
					>
						ENTRAR EM CONTATO
					</Button>
				</div>
			</motion.div>
		</section>
	);
}

export default Instituto;
