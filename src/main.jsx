import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

  import { Bounce, ToastContainer } from 'react-toastify';
import { TodoProvider } from '../context/TodoProvider.jsx';



createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <TodoProvider>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </TodoProvider>
    </BrowserRouter>

  </>,
)


