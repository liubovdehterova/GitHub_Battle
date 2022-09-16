import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Popular from "./components/Popular";
import Battle from "./components/Battle";
import Nav from "./components/Nav";

const App = () => (
    <div className='container'>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="popular" element={<Popular/>}/>
                <Route path="battle" element={<Battle/>}/>
                <Route path="*" element={<p>Not found</p>}/>
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;
