import axios from "axios";
import {logDOM} from "@testing-library/react";

const baseUrl = 'https://todoapp-a6u1.onrender.com'

const getAllToDo = (setToDo)=>{
    axios
        .get(baseUrl)
        .then(({data})=>{
            console.log('data ===>',data);
            setToDo(data)
        })
}

const addToDo = (text,setText,setToDo)=>{
        axios.post(`${baseUrl}/save`,{text})
            .then((data)=>{
                console.log(data)
                setText('')
                getAllToDo(setToDo)
            })
            .catch((err)=>console.log(err))

}

const updateTodo = (toDoId,text,setText,setToDo,setIsUpdating)=>{

    axios.put(`${baseUrl}/update`,{_id:toDoId,text})
        .then((data)=>{
            console.log(data)
            setText('')
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err)=>console.log(err))
}

const deleteTodo = (_id,setToDo)=>{
        console.log(_id)
    axios.delete(`${baseUrl}/delete/${_id}`)
        .then((data)=>{
            getAllToDo(setToDo)
        })
        .catch((err)=>console.log(err))
}

export  {getAllToDo,addToDo,updateTodo,deleteTodo}