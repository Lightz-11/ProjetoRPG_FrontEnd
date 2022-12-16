// import { React, createContext, useContext, useState, useEffect } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import io from "socket.io-client";
// import { api } from "../services/api";

// const socket = io(api.defaults.baseURL);

// socket.on("connect", () => console.log("Connect"));

// const PortraitContext = createContext({});

// function PortraitProvider({ children }) {
//   const [userPortrait, setUserPortrait] = useState([]);
//   console.log(
//     "🚀 ~ file: usePortrait.jsx:18 ~ PortraitProvider ~ userPortrait",
//     userPortrait
//   );

//   function handleInittialState(id) {
//     setUserPortrait((prevState) => [
//       ...prevState,
//       {
//         combate: false,
//         danoMassivo: false,
//         fichaId: id,
//         id: "",
//         inconsciente: false,
//         insano: false,
//         municao: 0,
//         municaoMax: 0,
//         pe: 0,
//         peMax: 0,
//         peso: 0,
//         ps: 0,
//         psMax: 0,
//         pv: 0,
//         pvMax: 0
//       }
//     ]);
//   }

//   function executeUpdateCombate({ id, newCombate }) {
//     setUserPortrait((prevState) => {
//       return prevState.map((portrait) => {
//         if (portrait.fichaId == id) {
//           return {
//             ...portrait,
//             combate: newCombate
//           };
//         } else {
//           return portrait;
//         }
//       });
//     });
//   }

//   function handleUpdateCombate(id, newCombate) {
//     socket.emit("status.combate", { id, newCombate });
//   }

//   socket.on("status.combate", executeUpdateCombate);

//   return (
//     <PortraitContext.Provider
//       value={{
//         handleUpdateCombate,
//         handleInittialState
//       }}
//     >
//       {children}
//     </PortraitContext.Provider>
//   );
// }

// function usePortrait() {
//   const context = useContext(PortraitContext);

//   return context;
// }

// export { PortraitProvider, usePortrait, PortraitContext };