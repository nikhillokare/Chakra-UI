
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Header from "./components/Header";
import Home from './components/Home';
import Footer from "./components/Footer";
import Login from "./components/Login"
import Upload from "./components/Upload"
import SignUp from "./components/SignUp"
import Videos from "./components/Videos"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Videos/>}/>
        <Route path="/upload" element={<Upload/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
