import './App.css';
import Boton from './componentes/Boton';
import logoFreeCode from './img/logo192.png'
import Contador from './componentes/Contador'
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
    setNumClics(numClics + 1)
    

  };

  const ReiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className="App">
      
      <div className="freecodecamp-logo-contenedor">
        <img
          className='freecodecamp-logo'
          src={logoFreeCode}
          alt='Logo FreeCodeCamp'
        />
      </div>

       <div className='contenedor-principal'>
        <Contador numClics={numClics}
        />

        <Boton
         texto='Clic'
         esBotonDeClic={true}
         manejarClic={manejarClic}/>

        <Boton
         texto='Reiniciar'
         esBotonDeClic={false}
         manejarClic={ReiniciarContador}/>
        
      

        

      </div>
      
    </div>
  );
}

export default App;
