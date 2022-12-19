// export const addTodoAtion={
//     type: 'todoList/addTodo',
//     payLoad:
// }

// action creater
export const addTodo =(data)=>{
    return {
        type:'todoList/addTodo',
        payLoad:data
    }
}

export const toggleTodoStatus =(id)=>{
    return {
        type:'todoList/toggleTodoStatus',
        payLoad:id
    }
}

export const searchFilterChange =(text) =>{
    return {
        type:'filter/searchFilterChange',
        payLoad:text
    }
}


export const statusFilterChange =(status)=>{
    return {
        type:'filter/statusFilterChange',
        payLoad:status
    }
} 

export const priorityFilterChange =(priority)=>{
    return {
        type:'filter/priorityFilterChange',
        payLoad:priority
    }
} 