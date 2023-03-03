import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const useGlobalContext = () => useContext(GlobalContext)

const AppProvider = ({ children }) => {
  const [user, setUser] = useState('john')

  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default AppProvider
