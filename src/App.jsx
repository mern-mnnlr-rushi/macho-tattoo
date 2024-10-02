import react from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavFoot } from "./components/NavFoot";
import { Home } from "./pages/Home";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<NavFoot />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
