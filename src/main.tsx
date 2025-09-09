import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css' // this is library for providimng classes for responsivness

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

// here i am asking my component to go and render yourself inside the div where the id is root
// here my component is App which is imported from App.tsx file
// and the div where the id is root is in index.html file
// so when i run the app the App component will be rendered inside the div where the id is root in index.html file
// and the index.html file is my landing page

// a component is a function which returns some jsx code i.e. view and this conponent is rendered inside the div where the id is root in index.html file i.e. mainfile

// a compoennt can be a root component here App is the root component

// a component can have multiple child components inside it
