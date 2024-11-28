import { ThemeProvider } from './components/contexts/ThemeContext'
import { AuthProvider } from './components/contexts/AuthContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './routers/CreateRouter'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/index.css'

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ToastContainer pauseOnFocusLoss={false}/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
