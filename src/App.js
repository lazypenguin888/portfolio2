import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import BakeryV1 from './components/BakeryV1/BakeryV1'
import BakeryV2 from './components/BakeryV2/BakeryV2'
import Flutter from './components/Flutter/Flutter'
import Webdev from './components/Webdev/Webdev'

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const router = createBrowserRouter([
    { path: process.env.PUBLIC_URL + "/", element:<Main />,},
    { path: process.env.PUBLIC_URL + "/bakeryv1", element:<BakeryV1/>,},
    { path: process.env.PUBLIC_URL + "/bakeryv2", element:<BakeryV2/>,},
    { path: process.env.PUBLIC_URL + "/flutter", element:<Flutter/>,},
    { path: process.env.PUBLIC_URL + "/webdev", element:<Webdev/>,},
  ]);

  return (
    // <div id='top' className={`${themeName} app`}>
    //   <RouterProvider router={router} />
    // </div>

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/bakeryv1" element={<BakeryV1/>} />
        <Route path="/bakeryv2" element={<BakeryV2/>} />
        <Route path="/flutter" element={<Flutter/>} />
        <Route path="/webdev" element={<Webdev/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App