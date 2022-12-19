const initState ={
    filters:{
        search:'',
        status:'All',
        priority:[]
    },
    todoList:[
        {id:1 , name:'Learn JavaScript' , completed :false, priority : 'Medium'},
        {id:2 , name:'Learn Redux' , completed :true, priority : 'High'},
        {id:3 , name:'Learn Yoga' , completed :false, priority : 'Low'},
    ]
}


const rootReducer=(state=initState,action)=>{
    /*
        action:{
            type:'string',
            payLoad:{id: , name:'' ,completed:boolean , priority:''}
        }
    */
    // console.log(state ,action.payLoad);
    console.log(state);
    switch(action.type){
        case 'todoList/addTodo':
            // console.log(action.payLoad);
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payLoad
                ]
            }
        
        case 'todoList/toggleTodoStatus':
            // console.log(action.payLoad);
            return {
                ...state,
                todoList: state.todoList.map((todo)=>{
                return (todo.id===action.payLoad ? {...todo,completed: ! todo.completed} : todo)
            })
            }
        case 'filter/searchFilterChange':
            return{
                ...state,
                filters:{
                    ...state.filters,
                    search:action.payLoad
                }
            } 

        case 'filter/statusFilterChange':
            return{
                ...state,
                filters:{
                    ...state.filters,
                    status:action.payLoad
                }
            }
        
        case 'filter/priorityFilterChange':
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        priority:[
                            ...action.payLoad
                        ]
                    }
                }  
        default:
            return state;
    }

}

export default rootReducer;