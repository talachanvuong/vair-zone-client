import { createContext, useContext, useState } from 'react'

const OptionContext = createContext(null)

export const useOption = () => {
  return useContext(OptionContext)
}

export const OptionProvider = ({ children }) => {
  const [currentOption, setCurrentOption] = useState(1)

  const changeOption = (organizerId) => {
    setCurrentOption(organizerId)
  }

  const value = {
    currentOption,
    changeOption,
  }

  return (
    <OptionContext.Provider value={value}>{children}</OptionContext.Provider>
  )
}
