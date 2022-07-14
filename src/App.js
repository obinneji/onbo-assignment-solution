import './styles.css'
import DropDown from './Components/DropDown';
import InputSection from './Components/InputSection';
function App() {
  return (
    <div className='phone-container'>
    <p>Phone number</p>
    <div className='container'>
    <DropDown />
    <hr></hr>
    <InputSection />
    </div>
  
    </div>
  )
  }
export default App;
