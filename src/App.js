import React from 'react'
import { Provider } from 'react-redux';
import Header from './Components/Header'
import ReduxStore from './DataManagement/ReduxStore';
import ShowTaskContainer from './Components/ShowTaskContainer'

export default function App() {
  return (
    <>
      <Provider store={ReduxStore}>
          <Header />
          <ShowTaskContainer/>
      </Provider>
    </>
  )
}


