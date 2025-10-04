import NavBar from './components/NavBar/Navbar'
import NameBlock from './components/NameBlock/NameBlock'
import AboutBlock from './components/AboutBlock/AboutBlock'
import SkillBlock from './components/SkillBlock/SkillBlock'

function App() {

  return (
    <>
      <NavBar />
      
      <div className="container">
        <NameBlock />
        <AboutBlock />
        <SkillBlock />
      </div>
    </>
  )
}

export default App
