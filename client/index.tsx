import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root') as HTMLDivElement
// if (!rootElement.innerHTML) {
const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <div>HELLO, WORLD!</div>
  </StrictMode>,
)
// }
