import React from "react";
import { Navbar } from "./components";

import "./App.scss";
import "./AppWrapper.scss";
import "./AppFlex.scss";
import "./AppFontSize.scss";
import "./AppGap.scss";
import "./Base.css";
import RoutesApp from "./router";

const App = () => {
	return (
		<div>
			<RoutesApp />
		</div>
	);
};

export default App;
