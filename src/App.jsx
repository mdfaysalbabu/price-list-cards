import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Phonebar from './Components/Phonebar/Phonebar'
import Pricelist from './Components/Pricelist/Pricelist'
import Dashboard from './Components/dashboard/Dashboard'

function App() {


  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className='text-5xl'>install tailwind</h1>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
      <Phonebar></Phonebar>
    </div>
  )
}

export default App
