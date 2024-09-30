import ReactDom from "react-dom/client"
import App from './App.tsx'
import './styles.scss'

const root = document.getElementById('root')

ReactDom.createRoot(root).render(<App />)