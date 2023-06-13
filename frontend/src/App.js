import Task from "./component/Task";
import {useEffect, useState} from "react";
import {addToDo, getAllToDo, updateTodo, deleteTodo} from "./utils/HandleApi";

function App() {

    const [todo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [toDoId, setToDoId] = useState('')


    useEffect(() => {
        getAllToDo(setToDo)
    }, [])

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)
    }

    return (
        <div className="App">
            <div className="container">
                <h1>Tasklar</h1>
                <div className="top">
                    <input type="text" placeholder={"Task qo'shish"} value={text}
                           onChange={(e) => setText(e.target.value)}/>
                    <div className="add"
                         onClick={isUpdating ? () => updateTodo(toDoId, text, setText, setToDo, setIsUpdating) :
                             () => addToDo(text, setText, setToDo)}>
                        {
                            isUpdating ? 'Update' : 'Add'
                        }
                    </div>


                </div>
                <div className="list">
                    {
                        todo.map((item) => <Task
                            key={item._id} text={item.text}
                            updateMode={() => updateMode(item._id, item.text)}
                            deleteTodo={() => deleteTodo(item._id, setToDo)}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
