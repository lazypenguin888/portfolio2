import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Main from './components/Main/Main'
import BakeryV1 from './components/BakeryV1/BakeryV1'
import BakeryV2 from './components/BakeryV2/BakeryV2'
import Flutter from './components/Flutter/Flutter'
import Webdev from './components/Webdev/Webdev'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  const router = createBrowserRouter([
    { path: "/", element:<Main />,},
    { path: "/bakeryv1", element:<BakeryV1/>,},
    { path: "/bakeryv2", element:<BakeryV2/>,},
    { path: "/flutter", element:<Flutter/>,},
    { path: "/webdev", element:<Webdev/>,},
  ]);

  return (
    <div id='top' className={`${themeName} app`}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App