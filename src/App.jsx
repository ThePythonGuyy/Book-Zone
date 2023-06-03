import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RootLayout from './Layouts/RootLayout'
import Login from './Components/Login'
import Header from './Components/Header'
import Home from './Components/Home'
import Hero from './Components/Hero'

function App() {
  const router = createBrowserRouter (
createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
          {/* <Route index element={<Login />} /> */}
          <Route index element={<Hero/>}/>
          <Route path='/books' element={<Header/>} />

        
      </Route>
  )
  )

  return (
    <>
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
