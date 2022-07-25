import React from "react";

import MedicinasFloresta from "../../containers/MedicinasFloresta/MedicinasFloresta";
import Ayahuasca from "../../containers/Ayahuasca/Ayahuasca";
import CerimoniaUniversalista from "../../containers/CerimoniaUniversalista/CerimoniaUniversalista";
import SagradoFeminino from "../../containers/SagradoFeminino/SagradoFeminino";
import Rape from "../../containers/Rape/Rape";

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
