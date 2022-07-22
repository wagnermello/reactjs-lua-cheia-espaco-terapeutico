import React from "react";

import MedicinasFloresta from "../../container/MedicinasFloresta/MedicinasFloresta";
import Ayahuasca from "../../container/Ayahuasca/Ayahuasca";
import CerimoniaUniversalista from "../../container/CerimoniaUniversalista/CerimoniaUniversalista";
import SagradoFeminino from "../../container/SagradoFeminino/SagradoFeminino";
import Rape from "../../container/Rape/Rape";

function MedicinasFlorestaPage() {
	return (
		<>
			<MedicinasFloresta />
			<Ayahuasca />
			<CerimoniaUniversalista />
			<SagradoFeminino />
			<Rape />
		</>
	);
}

export default MedicinasFlorestaPage;
