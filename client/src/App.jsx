import { Provider } from 'react-redux'
import './App.css'
import store, { persistor } from './store/store'
import { Toaster } from 'react-hot-toast'
import AppRouter from './routes/AppRouter'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRouter />
        </PersistGate>
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
