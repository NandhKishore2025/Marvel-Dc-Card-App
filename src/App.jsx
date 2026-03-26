import {Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
import HeroHetail from './HeroDetail.jsx'

function App() {

  
  
  
  return(
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hero/:id" element={<HeroHetail/>}/>
      </Routes>

  )
}

export default App;