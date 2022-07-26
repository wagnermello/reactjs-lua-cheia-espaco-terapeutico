import React from "react";
import { Header } from "../../components";
import Instituto from "../../containers/Instituto/Instituto";
import NavbarMobileHome from "../../components/NavbarMobile/NavbarMobileHome";

function Home() {
	return (
		<>
			<Header />
			<Instituto />
			<NavbarMobileHome />
		</>
	);
}

export default Home;
