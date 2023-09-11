import './App.css'
import { ErrorBoundary } from './components/errorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Composition />
    </ErrorBoundary>
  )
}

type Data = {
  payload: string
}

const launch = () => new Promise<Data>((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      reject(new Error('🧨🧨🧨'))
    }

    resolve({ payload: '🐲🐲🐲' })
  }, 400)
})

function Composition() {
  // code goes here

  return (
    <div>
      <h3>Fireworks</h3>
      {/** template goes here */ }
      <div>
        <button onClick={launch}>Launch!</button>
      </div>
    </div>
  )
}

export default App
