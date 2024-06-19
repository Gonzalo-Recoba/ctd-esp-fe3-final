// import {createContext, useContext, useState } from "react";


// const GlobalStates = createContext();

// const Context = ({children}) => {
//     const [salario, setSalario] = useState(0);
//     const [theme, setTheme] = useState('light')
//     const [favs, setFavs] = useState([])

//     return (
//         <GlobalStates.Provider value={{
//             salario, setSalario, 
//             theme, setTheme
//             }}>
//                 {children}
//         </GlobalStates.Provider>
//     );
// };

// export default Context;

// export const useGlobalStates = () => useContext(GlobalStates)