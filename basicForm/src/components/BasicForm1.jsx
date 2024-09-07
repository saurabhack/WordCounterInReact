import {useState} from "react"
function BasicForm1(){
    const [name,setName]=useState('')
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
        <>
        <h3>Word Counter</h3>
        <form onSubmit={handleSubmit}>
        <textarea onChange={(e)=>{setName(e.target.value)}} cols={100} rows={25}  ></textarea>
        <br></br>
        <button>submit</button>
        </form>

        <br>
        </br>
        <p>Total numbers of words = {name.split(" ").length}</p>
        <p>Total Characters = {name.length}</p>

        </>
    )
}
export default BasicForm1