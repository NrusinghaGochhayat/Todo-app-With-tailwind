import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import Todo from './components/Todo';

const App = () => {
 
  return (
    <div>
      <Navbar />
      <Todo/>

    </div>
  )
}

export default App
