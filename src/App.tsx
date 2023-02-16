import TopNav from "./components/TopNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from "./views/Home";
import Resume from "./views/Resume";
import Contact from "./views/Contact";
import Project from "./views/Project";


//TODO: Lighthouse SEO optimization
function App() {
  return (
	<Router>
		<div className="bg-slate-100 min-h-screen pb-12 text-gray-800">
			<div
				className="container mx-auto font-serif md:px-8 lg:px-16">
				<TopNav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/resume" element={<Resume />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/projects/:id" element={<Project />} />
				</Routes>
			</div>
		</div>
	</Router>
  );
}

export default App;
