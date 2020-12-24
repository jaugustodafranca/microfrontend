import React, { useState, useEffect, useCallback } from 'react'
import Parcel from 'single-spa-react/parcel'

import './styles.css'
import '../../styles/reset.css'

const App = () => {
  const [todoList, setTodoList ] = useState([])

  useEffect(()=>{
    window.addEventListener('@jungle/todo/add', event => {
      setTodoList(prevState => [...prevState, event.detail.text])
    })
  },[])

  const handleRemoveItem = useCallback((event)=>{
    const dataIndex =  Number(event.target.dataset.index)
    setTodoList(prevState => prevState.filter((_,index) => index !== dataIndex ))
  },[])

  return(
    <section class='main'>
      <div>
        <Parcel config={()=>System.import('@jungle/vue-single')}/>
        <div class='todo-container'>
          <div class='header'>
            <img class='react-logo' alt='react-image' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png' />
            <h1 class='todo-title'>Todo list:</h1>
          </div>
          <div class='list'>
            {todoList.map((todo, index)=>
              <div class='todo-item'>
                <p class='todo-text'><b>{index+1}.</b> {todo}</p>
                <button type='button' onClick={handleRemoveItem} data-index={index} class='button'>Remove</button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Parcel config={()=>System.import('@angular-single')}/>
    </section>
  )
}

export default App
