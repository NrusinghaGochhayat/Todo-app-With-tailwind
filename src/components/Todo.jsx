import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Todo = () => {
    const [todo, settodo] = useState("")
    const [todos, settodos] = useState([])

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if (todoString) {
            let todos = JSON.parse(localStorage.getItem("todos"))
            settodos(todos)

        }
    }, [])


    const saveToLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    const handleEdit = (e, id) => {
        let newTodoitem = todos.filter((i) => {
            return i.id === id
        })
        settodo(newTodoitem[0].todo)
        let newTodo = todos.filter((item) => {
            return item.id !== id
        })
        settodos(newTodo)
        saveToLocalStorage()

    }
    const handleDelete = (e, id) => {
        let deleteItem = confirm('Are u want to delete this todo?')
        if (deleteItem) {
            let newTodo = todos.filter((item) => {
                return item.id !== id
            })
            settodos(newTodo)
        } else {
        }
        saveToLocalStorage()

    }
    const handleAdd = () => {
        settodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
        settodo('')
        saveToLocalStorage()

    }
    const handleChange = (event) => {
        settodo(event.target.value)
    }

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex((item) => {
            return item.id === id;
        })
        let newTodo = [...todos];
        newTodo[index].isCompleted = !newTodo[index].isCompleted
        settodos(newTodo)
        saveToLocalStorage()
    }
    return (
        <div className='text-center m-auto '>
            <div className="md:container mx-auto bg-cyan-300 my-5 rounded-xl p-3 min-h-[80vh]">
                <div className="addtodo">
                    <h1 className='text-center font-bold'>Enter Your todo here..</h1>

                    <input onChange={handleChange} value={todo} className=' rounded-lg w-1/2' type="text" />
                    <button  onClick={handleAdd} disabled={todo.length <= 3} className='bg-cyan-600 m-2 hover:bg-cyan-950 text-white rounded-lg px-6 py-0.5 text-sm my-2 '>Add</button>


                </div>

                <h2 className='  text-xl font-bold'>Your Todo</h2>
                {todos.length === 0 && <div className=' text-sm m-5'>No Todos to display</div>}
                {todos.map((item) => {
                    return <div className='flex justify-center align-center '>
                        <div key={item.id} className="todo flex items-center justify-between w-3/5	 gap-1">
                        <div className='flex my-2 gap-3 items-center'>

                            <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name={item.id} />
                            <div className={item.isCompleted ? "line-through text-start" : "" + "text-start"}>{item.todo}</div>
                        </div>
                        <div className="btn flex gap-2  ">
                            <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-cyan-600 hover:bg-cyan-950 text-white rounded-lg px-6 py-1 text-sm my-2'><FaRegEdit /></button>
                            <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-cyan-600 hover:bg-cyan-950 text-white rounded-lg px-6 py-1 text-sm my-2 '><MdDelete />
                            </button>
                        </div>

                    </div>
                </div>
                })}


            </div>
        </div>
    )
}

export default Todo
