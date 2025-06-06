import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Nav from "./pages/Navbar.jsx"
import History from './pages/History.jsx'
import Clients from './pages/clients.jsx'
import Manage from './pages/manage.jsx'
import Mobile from './pages/Mobile.jsx'
import Socialmedia from './pages/Sociamedia.jsx'
import Tutorial from './pages/tutorial.jsx'
import Customers from './pages/customers.jsx'
import Blog from './pages/blog.jsx'

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
  </StrictMode>,
)
