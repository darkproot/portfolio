import NavBar from './components/NavBar/Navbar'
import NameBlock from './components/NameBlock/NameBlock'
import AboutBlock from './components/AboutBlock/AboutBlock'
import SkillBlock from './components/SkillBlock/SkillBlock'
import ProjetBlock from './components/ProjetBlock/ProjetBlock'

function App() {

  return (
    <>
      <NavBar />
      
      <div className="container">
        <NameBlock />
        <AboutBlock />
        <SkillBlock />
        <ProjetBlock />
      </div>
    </>
  )
}

export default App
