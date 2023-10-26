import {useState, useEffect} from "react"

export function Group(props) {

    const [Group, setGroup] = useState([])
    fetch('http://localhost:8000'+props.group)
.then((res)=>res.json())
.then(data => setGroup(data['name']))
   

    return (
        <p>{Group}</p>
    )
}