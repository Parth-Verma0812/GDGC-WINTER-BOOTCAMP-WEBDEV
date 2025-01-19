import React, { useEffect, useState } from "react"

function Home(){
    const [todos,setTodos] = useState([])
    useEffect(() => {
        axios.get('http:/localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <h2>Todo List</h2>
            <Create />
            {
                todos.lenth === 0
                ?
                <div><h2>No Record</h2></div>
                :
                todos.map(todo => (
                    <div>
                        {todo}
                    </div>
                ))
            }
        </div>
    )
}

export default Home


