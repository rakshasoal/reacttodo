import react from 'react'

const Todocard = (props) => {
    return(
    <>
    <div class = "list-group-item">{props.eachtodo}</div>
        <button onClick = {()=> {props.remove(props.eachtodo)}}>REMOVE TO DO</button>
      </> 
        )

        
}
export default Todocard