import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portal from "./pages/portal/Portal";
import Main from "./pages/main/Main";
import Info from "./pages/info/Info";
import PortalForm from "./pages/portalForm/PortalForm";
import ServiceInfo from "./pages/serviceInfo/ServiceInfo";
import NandeInfo from "./pages/nandeInfo/NandeInfo";
import Board from "./pages/board/Board";
import Service from "./pages/service/Service";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/portal/staff" element={<PortalForm personnel="staff" />} />
          <Route path="/portal/patient" element={<PortalForm personnel="patient" />} />
          <Route path="/info" element={<Info />} />
          <Route path="/board" element={<Board />} />
          <Route path="/service/:serviceId" element={<Service />} />
          <Route path="/services" element={<ServiceInfo />} />
          <Route path="/newsandevents" element={<NandeInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
