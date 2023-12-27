import './App.scss'
import Main from '../Main/Main'
import Navigation from '../Navigation/Navigation'
import { Route, Routes } from 'react-router-dom'
import Slider from '../Slider/Slider'

function App() {
  return (
    <div className='app'>
      <Navigation />
      <Routes>
        <Route path='/' element={
          <Main />
        }
        />
        <Route path='/slider' element={
          <Slider />
        }
        />
      </Routes>
    </div>
  )
}

export default App
