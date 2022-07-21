import React from "react";
import Atendimentos from "../../container/Atendimentos/Atendimentos";
import Benzimentos from "../../container/Benzimentos/Benzimentos";
import Taro from "../../container/Taro/Taro";
import Reiki from "../../container/Reiki/Reiki";
import ConeChines from "../../container/ConeChines/ConeChines";

function AtendimentosPage() {
	return (
		<div>
			<Atendimentos />
			<Benzimentos />
			<Taro />
			<Reiki />
			<ConeChines />
		</div>
	);
}

export default AtendimentosPage;
