import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from "./pages/Navbar.jsx"
import History from './pages/History.jsx'
import Clients from './pages/Clients.jsx'
import Manage from './pages/Manage.jsx'
import Mobile from './pages/Mobile.jsx'
import Socialmedia from './pages/Sociamedia.jsx'
import Tutorial from './pages/Tutorial.jsx'
import Customers from './pages/Customers.jsx'
import Blog from './pages/Blog.jsx'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <History />
    <Clients />
    <Manage />
    <Mobile />
    <Socialmedia />
    <Tutorial/>
    <Customers/>
    <Blog/>
    <Footer/>
  </StrictMode>,
)
