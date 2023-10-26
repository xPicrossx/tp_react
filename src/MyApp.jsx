//Fichier jsx qui commence par une maj, grande chance que ce soit un composant.

import {useState} from "react"
import {Contact} from "./components/Contact.jsx"

function MyApp() {

    // version JS classique : const listContact = []
    const [listContacts,  setListContacts] = useState([])
//Quand on cree un hook (useState) a une constante, on donne une variable et le setteur de la variable (pour la modifier) 
//C'est l'interet de passer par cette methode, ca reagit au modif des données, et actualise cette partie instatanemment des que c'est modifié
//Les hooks rendent ca plus lisible


/* La ca marche pas le useEffect on sait pas pourquoi

useEffect(()=>{
    //map c'est deja une boucle, c'est comme un foreach(listContact as contact)
    listContacts.map((contact)=>{
        console.log(contact)
        return <h2>{contact.lastname}</h2>
    })
}) */

function getContacts(){

    /* A BIEN REVISER C'EST A SAVOIR !!!!!
Comment utiliser l'API fetch, 1: on va chercher notre API (ici la table contact dans notre BDD)
2: Ensuite le premier .then interprete la promesse de notre fetch et on transforme la reponse
3: Le 2e .then interprete la reponse d'avant pour utiliser le Json */

fetch('http://localhost:8000/api/contacts')
.then((res)=>res.json())
// 3: .then(data => console.log(data))
//on replace par ça du coup comme on a un hook:
.then(data => setListContacts(data['hydra:member']))
}



return (
<>
<h1>Coucou la street</h1>
<button onClick={getContacts}>Récupérer la liste</button>
{listContacts.map((contact, index) =>
<Contact key={index} contact= {contact}/> //toutes les infos qu'on fait passer dans Contact, on les retrouve dans Props (de l'autre cote, dans Contact.jsx)
//Tu fais passer quelque chose, props est rempli !! C'est comme ça !

)}
</>
)}
export default MyApp