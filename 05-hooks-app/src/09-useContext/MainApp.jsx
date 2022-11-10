import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <>
        <h1>MainApp</h1>
        <hr/>

        <NavBar />

        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='login' element={ <LoginPage /> } />
          <Route path='about' element={ <AboutPage /> } />

          <Route path='/*' element={ <Navigate to='/about'/> } />

        </Routes>

    </>
  )
}
