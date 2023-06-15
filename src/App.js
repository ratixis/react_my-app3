import"./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Project from "./pages/Project";
import Projects from "./pages/Projects";
import ScrollToTop from "./utils/scrollToTop";
import PrivateRoute from "./utils/PrivateRoute";
import Homme from "./pages/Homme";



function App() {
  return (
    <div className="App">
  
<Router>
  <ScrollToTop />
   <Navbar />
    
          <Routes>
                <Route element={<PrivateRoute/>}>
                <Route path="/Project" element={<Project/>} />
                <Route path="/Projects/:id" element={<Projects/>} />
                <Route path="/Statistics" element={<Statistics />} />
                <Route  path="/Homme" element={<Homme />} />
                </Route>
                
               <Route  path="/" element={<Home />} />
          </Routes>
             

    <Footer />
    
</Router>

      
    </div>
  );
}

export default App;
