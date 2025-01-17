import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VedioMeetComponent from './pages/VedioMeet';
import HomeComponent from './pages/home';
import History from './pages/history';



function App() {
  
  return (
    <>
     <div className="App">
         <Router>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={ <LandingPage />} />
                    <Route path='/auth' element={ <Authentication />} />
                    <Route path='/home' element={ <HomeComponent />} />
                    <Route path='/history' element={ <History />} />
                    <Route path='/:url' element={ <VedioMeetComponent />} />
                </Routes>
            </AuthProvider>
         </Router>
      </div>
    </>
  )
}

export default App;
