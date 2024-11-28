import { createContext, useContext, useState } from 'react'

const PageContext = createContext(null)

export const usePage = () => {
  return useContext(PageContext)
}

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState(0)

  const changePage = (page) => {
    setPage(page)
  }

  const value = {
    page,
    changePage,
  }

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>
}
