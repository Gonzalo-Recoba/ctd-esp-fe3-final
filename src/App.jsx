
import { Route, Routes } from "react-router-dom";
import {routes}  from "./Components/utils/routes";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Favs from "./Routes/Favs"
import ErrorPage from "./Components/ErrorPage";
import { useGlobalStates } from "./Components/utils/global.context";
import Detail from "./Routes/Detail";
import Layout from "./Layout/Layout";



function App() {
  const {state} = useGlobalStates()
  return (
      <div className={state.theme}>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path={routes.home} element={<Home/>}/>
              <Route path={routes.contact} element={<Contact/>}/>
              <Route path={routes.favs} element={<Favs/>}/>
              <Route path={routes.detail} element={<Detail/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Route>
          </Routes>
      </div>
  );
}
export default App;
