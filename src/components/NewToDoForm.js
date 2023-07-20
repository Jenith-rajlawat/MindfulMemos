import React,{useState} from 'react'



function NewToDoForm(props){

    const[description, setDescription]=useState(``);

    const[assigned, setAssigned]=useState(``);

    const descriptionChange=(event)=>{
    console.log('description',event.target.value);
    setDescription(event.target.value);
}

const assignedChange = (event)=>{
    console.log('assigned',event.target.value);
    setAssigned(event.target.value);
}

    const submitTodo= ()=>{
        if(description!==`` && assigned !==``){
            props.addTodo(description,assigned);
            setDescription(``);
            setAssigned(``);
        }
    }
return(
    <div className='mt-5'>
        <form action="">
            <div className='mb-3'>
                <label className='form-label'> Assigned</label>
                <input type="text" 
                className='form-control' 
                required onChange={assignedChange}
                value={assigned} />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea 
                className='form-control'
                 rows={3}
                  required
                  onChange={descriptionChange}
                  value={description}
                  ></textarea>
            </div>
            <button type='button' 
            className='btn btn-primary mt-3'
            onClick={submitTodo}
            >Add todos</button>
        </form>
    </div>

)    
}

export default NewToDoForm