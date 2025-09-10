
import './App.css'
// import { SampleLogin } from './components/SampleLogin.tsx'
// import NavBar from './components/NavBar.tsx'
import AddCake from './components/AddCake.tsx'
import Home from './components/Home.tsx'

function App() {
  return (
    <>
      <Home />
    </>
  )
}

//<NavBar x=10 y=20 z=30 />  we can pass props like this also
// if we dont use defualt below it will give error while importing in main.tsx file with syntax import App from './App.tsx
//if we just use export without default then we have to import it with syntax import {App} from './App.
export default App
