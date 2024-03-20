import { Fragment, useState } from 'react';
import './App.css';

const App = () => {
    const[inputeValue, setInputValue]=useState('')
    const[todos, setTodos]=useState([])

    const handleInputValue = (e) => {
      setInputValue(e.target.value)
    }

    const handleTodoItem = (e) => {
      e.preventDefault()
      setTodos([...todos, inputeValue])
      setInputValue('')
    }

    return(
      <>
        <div className='boxH1'>
          <h1>Lista de Afazeres</h1>
        </div>
        <form className='formStyle' onSubmit={handleTodoItem}>
          <div className='boxInputLabel'>
            <label for='todo'>Adicione uma tarefa</label>
            <input type='text' id='todo' value={inputeValue} onChange={handleInputValue} />
          </div>
          <button type='submit'>Adicionar</button>
        </form>
        <ul>
          {todos.map(
            (item, index) => {
              return(
                <li key={index}>{item}
                  <button onClick={() => {

                    const newTodos = todos.filter((element) =>
                    element !== item)
                              
                    setTodos(newTodos)
                  }}               
                  >Delete</button>
                </li>
              )
            }
          )}
        </ul>
      </>
    )
}

export default App;
