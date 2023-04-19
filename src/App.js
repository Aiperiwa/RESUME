import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AboutPage } from './pages/about'
import { ResumePage } from './pages/resume'
import { ContactsPage } from './pages/contacts'
import { PortfolioPage } from './pages/portfolio'
import { Layout } from './components/layout' 
import { NotFoundPage } from './pages/not-found'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutPage />} />
          <Route index element={<ResumePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
        
      </Routes>
    </BrowserRouter>
  )
}
