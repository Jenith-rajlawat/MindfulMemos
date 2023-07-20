import React,{useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewToDoForm';



function App() {

  // Object array
  // const todos=[
  //   {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'User One'},
  //   {rowNumber:2, rowDescription:'Water plants', rowAssigned:'User Two'},
  //   {rowNumber:3, rowDescription:'Make dinner',rowAssigned:'User One'},
  //   {rowNumber:4, rowDescription:'Study java', rowAssigned:'User Three'}
  // ]

  //using useState to rerender
  const [todos,setTodos]=useState([
     {rowNumber:1, rowDescription:'Feed puppy', rowAssigned:'User One'},
     {rowNumber:2, rowDescription:'Water plants', rowAssigned:'User Two'},
     {rowNumber:3, rowDescription:'Make dinner',rowAssigned:'User One'},
     {rowNumber:4, rowDescription:'Study java', rowAssigned:'User Three'}
   ])

//usestate to close the form
const [showAddTodoForm, setShowAddTodoForm]= useState(false);

  //  Add todo
  const addTodo = (description,assigned)=>{
    let rowNumber=0;
    if(todos.length>0){
      rowNumber=todos[todos.length-1].rowNumber+1;
    } else{
      rowNumber=1;
    }
    const newTodo={
      rowNumber:rowNumber,
      rowDescription: description,
      rowAssigned: assigned 
    }
    setTodos(todos=>[...todos,newTodo])
  }

  // Delete todo
  const deleteTodo =(deleteTodoRowNumber) =>{
    let filtered=todos.filter(function(value){
      return value.rowNumber !==deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className="mt-5 container ">
      <div className="card">
        <div className="card-header">
            Your ToDos
        </div>
        <div className="card-body">
           <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
           <button onClick={()=> setShowAddTodoForm(!showAddTodoForm)} className='btn btn-primary'>
            {showAddTodoForm ? `Close New Todo`:`New Todo`}
            </button>
            {showAddTodoForm &&
            <NewToDoForm addTodo={addTodo}/>
            }
        </div>
      </div>
    </div>
  );
}

export default App;
