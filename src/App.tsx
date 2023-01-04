
import GlobalStyle from './styles/global'
import { Router } from './routes/Routes'
import { UserContextProvider } from './contexts/user.context'
import { PetsContextProvider } from './contexts/pets.context'

function App () {
  return (

    <>
      <UserContextProvider>
      <PetsContextProvider>
        <Router />
        <GlobalStyle />
        </PetsContextProvider>
      </UserContextProvider>
    </>

  )
}

export default App
