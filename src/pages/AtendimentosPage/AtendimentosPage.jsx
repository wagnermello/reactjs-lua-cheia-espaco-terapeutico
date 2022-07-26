import React from "react";
import Atendimentos from "../../containers/Atendimentos/Atendimentos";
import Benzimentos from "../../containers/Benzimentos/Benzimentos";
import Taro from "../../containers/Taro/Taro";
import Reiki from "../../containers/Reiki/Reiki";
import ConeChines from "../../containers/ConeChines/ConeChines";
import NavbarMobileAtendimentos from "../../components/NavbarMobile/NavbarMobileAtendimentos";

function AtendimentosPage() {
	return (
		<div>
			<Atendimentos />
			<Benzimentos />
			<Taro />
			<Reiki />
			<ConeChines />
			<NavbarMobileAtendimentos />
		</div>
	);
}

export default AtendimentosPage;
