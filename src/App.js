// import { useState } from "react";
// eslint-disable-next-line
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Mainpage from "./Pages/Mainpage";
import Gamepage from "./Pages/Gamepage";

import './style.css';

function App() {
	return(
		<HashRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>

				<Route path="*" element={<h1>Error 404: Not Found</h1>}/>

				<Route path="/" element={<Mainpage/>}/>
				<Route path="/games" element={<Gamepage/>}/>
			</Route>
		</Routes>
		</HashRouter>
	);
}



export default App;