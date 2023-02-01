import { Fragment, useEffect, useState } from 'react'
import Container from './components/container'
import Title from './components/title'
import Input from './components/input'
import Button from './components/button'
import './App.css'




function App() {
  const [show, setShow] = useState<boolean>(true)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)


  return (
    <Fragment>
      <Container>
        <div className='left-side'>
          <Title color='var(--title-color)'>Calcule o seu IMC.</Title>
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial da Saúde para calcular o peso ideal de cada pessoa.</p>
          <Input id='height'
           type='number'
           value={height > 0 ? height : ''}
           onChange={(e) => {   
              setHeight(parseFloat(e.target.value))
           }}
           placeholder='Digite a sua altura. Ex: 1.5 (em métros)'/>
           <Input id='height'
           type='number'
           value={weight > 0 ? weight : ''}
           onChange={(e) => {
              setWeight(parseFloat(e.target.value))
           }}
           placeholder='Digite o seu peso. Ex: 75.3 (em kg)'/>
          <Button 
            onClick={() => {
            
            }}
            opacity={false}
            >Calcular</Button>
        </div>
        <div className="right-side">

        </div>
      </Container>
    </Fragment>
    
  )
}

export default App
