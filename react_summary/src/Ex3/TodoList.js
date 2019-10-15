import React from 'react'

const TodoList = ({todos,change,del}) => {

    console.log("TodoList todos.. ",todos)

    const list = todos.map( ({tno,title,complete}) => {

        const style = complete ? {textDecorationLine: 'line-through', textDecorationStyle: 'solid'} : {}
        
        return(
            <li key={tno} style={style}>{title}
            <input type='checkbox' checked = {complete? 'checked':''} onChange={() => change(tno)}></input>
            <button onClick={()=>del(tno)}>X</button>
            </li>
        )
    }) 

    return(
        <div>
        <hr></hr>
        <ul>
            {list}
        </ul>
        </div>
    )
}

export default TodoList