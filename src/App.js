import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import PromoPage from "./pages/Promo/PromoPage";
import PhoneEnterPage from "./pages/PhoneEnter/PhoneEnterPage";
import FinalInfoPage from "./pages/FinalInfo/FinalInfoPage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Routes>
            <Route path={'/'} element={<PromoPage/>}/>
            <Route path={'/phone-entering'} element={<PhoneEnterPage/>}/>
            <Route path={'/final-info'} element={<FinalInfoPage/>}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
