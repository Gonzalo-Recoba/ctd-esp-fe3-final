
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {routes}  from "./Components/utils/routes";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import ErrorPage from "./Components/ErrorPage";
import { useGlobalStates } from "./Components/utils/global.context";
import Detail from "./Routes/Detail";



function App() {
  const {theme} = useGlobalStates()
  return (
      <div className={theme}>
          <Navbar/>
          <Routes>
            <Route path={routes.home} element={<Home/>}/>
            <Route path={routes.contact} element={<Contact/>}/>
            <Route path={routes.favs} element={<Favs/>}/>
            <Route path="/odontologo/:id" element={<Detail/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        <Footer/>
      </div>
  );
}

export default App;
