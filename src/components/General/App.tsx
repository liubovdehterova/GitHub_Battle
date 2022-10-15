import {FC} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../../App.css';
import Home from "./Home";
import Popular from "../Popular/Popular";
import Battle from "../Battle/Battle";
import Nav from "./Nav";
import Results from "../Battle/Results";


const App: FC = (): JSX.Element => (
    <div className='container'>
        <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="popular" element={<Popular/>}/>
                <Route path="battle" element={<Battle/>}/>
                <Route path="battle/results" element={<Results/>}/>
                <Route path="*" element={<p>Not found</p>}/>
            </Routes>
        </BrowserRouter>
    </div>
)

export default App;
