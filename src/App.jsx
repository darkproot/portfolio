import NavBar from './components/NavBar/Navbar'
import NameBlock from './components/NameBlock/NameBlock'
import AboutBlock from './components/AboutBlock/AboutBlock'
import SkillBlock from './components/SkillBlock/SkillBlock'
import ProjetBlock from './components/ProjetBlock/ProjetBlock'
import ContactBlock from './components/ContactBlock/ContactBlock'

function App() {

  return (
    <>
      <NavBar />
      
      <div className="container">
        <NameBlock />
        <AboutBlock />
        <SkillBlock />
        <ProjetBlock />
        <ContactBlock />
      </div>
    </>
  )
}

export default App
