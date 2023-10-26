import {Group} from "./Group.jsx"
import {Age} from "./Age.jsx"
//on y fait appel au groupe ici parce qu'on l'affiche dans Contaxt.jsx, pas de la racine. 
//En fait c'est en cascade

export function Contact(props) {
    
      return (
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.contact.lastname}</h5>
    <Group group={props.contact.grp}/> 
    <Age date={props.contact.birthdate}/> 
    <p className="card-text">{props.contact.firstname}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      )
      
      
 
}
