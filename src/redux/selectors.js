
export const todoListSelectors =(state)=>{
    const status= statusFilterSetector(state);
    const priority = priorityFilterSetector(state);
    // console.log(state);
    // console.log(priority);
    if(status==='All'){
        return state.todoList.filter((todo)=>{
            return (
                priority.length ? 
                todo.name.toLowerCase().includes(searchTextSetectors(state).toLowerCase()) &&priority.includes(todo.priority) 
                : todo.name.includes(searchTextSetectors(state)) 
            );
        })
    }
    else{
        return state.todoList.filter((todo)=>{
            return( 
                todo.name.includes(searchTextSetectors(state))&&
                (status === 'Completed'? todo.completed : ! todo.completed) &&
                (priority.length ? priority.includes(todo.priority) : true )
            );
        })
    }
    
}

export const searchTextSetectors =(state)=>{
    return state.filters.search;
}

export const statusFilterSetector=(state)=>{
    return state.filters.status;
}

export const priorityFilterSetector=(state)=>{
    return state.filters.priority;
}