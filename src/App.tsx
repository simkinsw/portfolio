import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from "./views/Home";
import Resume from "./views/Resume";

function App() {
  return (
	<Router>
		<div className="bg-slate-100 min-h-screen">
			<div className="container px-16 mx-auto font-serif">
				<TopNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/contact" />
				</Routes>
			</div>
		</div>
	</Router>
  );
}

export default App;
