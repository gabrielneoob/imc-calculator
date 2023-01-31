import { Fragment, useState } from 'react'
import Container from './components/container'
import Title from './components/title'
import './App.css'



function App() {
  const [show, setShow] = useState<boolean>(true)

  return (
    <Fragment>
      <Container>
        <div className='left-side'>
          <Title color='var(--title-color)'>Calcule o seu IMC.</Title>
        </div>
        <div className="right-side">

        </div>
      </Container>
    </Fragment>
    
  )
}

export default App
