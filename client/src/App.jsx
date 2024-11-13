import { Provider } from 'react-redux'
import './App.css'
import store from './store/store'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
      <Provider store={store}>
        <AppRouter />
      </Provider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
      />
    </>
  )
}

export default App
