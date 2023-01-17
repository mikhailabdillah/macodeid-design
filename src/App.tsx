import { useState } from 'react'
import './App.css'
import { Button } from './components/core'
import { ArrowLeft } from './components/icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      {/* <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div> */}
      <h1>
        Vite + React <ArrowLeft />
      </h1>
      <div className='card'>
        <Button
          variant='filled'
          color='primary'
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <a href={'/'}>Test Link</a>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </main>
  )
}

export default App
