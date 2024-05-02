import React, { useEffect, useState } from 'react'
// import Click from './comp/Click'
import Register from './comp/userLogin/register'
import Dice from './comp/Dice/Dice'
import Feedback from './comp/Feedback/Feedback'
import '../src/App.css'
import { fetchClients } from './comp/ClientCard/fetchClients'
import ClientCard from './comp/ClientCard/ClientCard'
const App = () => {
  const [state,setState] = useState({
    client: null
   })
  useEffect(()=>{
  
  fetchClients().then((client) => {
  setState({
      client
      
    }); 
  });
},[])
  return ( 
    <>
     {/* <div>{state.client ? <ClientCard name= {state.client.name} phone={state.client.phone
    } card = {state.client.card} /> : "loading..."}</div> */}
      {/* <Register/>   */}
      {/* <Click/> */}
      {/* <Dice/> */}
      {/* <Feedback/> */}
    </>
  )
}

export default App