import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <Link to='about'>About</Link >
        <Link to='login'>Login</Link >
        <Link to='/'>Home</Link >
    </>
  )
}
