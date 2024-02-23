import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react';

import EstiloGlobal, { Container, MainContainer } from './styles'

import store from './store'
// import Home from './pages/Home'
import Contatos from './pages/Contato'
import Home from './pages/Home';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/novo',
    element: <Contatos />
  }
])

function App() {
  return (
    <>
    <Provider store={store}>
      <EstiloGlobal />
      <MainContainer>
        <RouterProvider router={rotas} />
      </MainContainer>
    </Provider>
    </>
  )
}

export default App;
