import StudentList from "./StudentList";
import FavStudent from "./favstd";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
    const studentList = ["Adharsh","Arjun","Arunan","Bala","chandru","Dhanusivam","Gajini","Surya","Sarvesh","Rajesh"];
    var [favstu, setfavstu] = useState([])
    const [disabledButtons, setDisabledButtons] = useState({});


    return (
        <BrowserRouter>
            <div className="p-3 bg-red-400">
                <Link to="/" className="text-white" style={{ borderBottom: "solid black 0.8px" }}>List of Students</Link>
                <Link to="/favourite" className="text-white ml-16" style={{ borderBottom: "solid black 0.8px" }}>Favourite Students</Link>
            </div>
            <Routes>
                <Route path="/" element={<StudentList students={studentList} favstu={favstu} setfavstu={setfavstu} disabledButtons={disabledButtons} setDisabledButtons={setDisabledButtons}/>} />
                <Route path="/favourite" element={<FavStudent students={studentList} favstu={favstu} setfavstu={setfavstu} setDisabledButtons={setDisabledButtons}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
