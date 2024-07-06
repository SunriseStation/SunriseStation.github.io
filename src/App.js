// import { useState } from "react";
// eslint-disable-next-line
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Testpage from "./Pages/Testpage";
import Mainpage from "./Pages/Mainpage";
import Gamepage from "./Pages/Gamepage";
import EmbedGame from "./Components/EmbedGame";
import Transpage from "./Pages/Transpage";

import './style.css';



function App() {
	return(
		<HashRouter>
		<Routes>
			<Route path="/" element={<Layout/>}>

				<Route path="*" element={<h1 className="mt-32 text-white text-8xl">Error 404: Not Found</h1>}/>

				<Route path="/" element={<Mainpage/>}/>
				<Route path="/games" element={<Gamepage/>}>

					<Route path="/games/" element={<EmbedGame/>}/>
          
					{/* dynamic-routing try try */}
					<Route path="/games/:gamename" element={<EmbedGame/>}/>
					{/* <Redirect from="/games/" to="/games/MagicalBlueStar"/> */}
				</Route>
				<Route path="/password" element={<Testpage/>}/>
				<Route path="/tools/trans" element={<Transpage/>}/>
			</Route>
		</Routes>
		</HashRouter>
	);
}



export default App;