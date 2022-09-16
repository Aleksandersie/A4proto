import TopBar from "./components/TopBar/TopBar";
import { Button, Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
