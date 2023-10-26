//import moment from "moment"

export function Age(props){ 
    let birthdate = new Date(props.date)
    let difference = Date.now() - birthdate.getTime()
    let calculage = new Date(difference)
    let age =  Math.abs(calculage.getUTCFullYear()-1970)
    return <p>{age} ans</p>
}

/*Une autre facon consiste à utiliser moment.js donc à l'importer puis:
    const age = moment(birthdate,"YYYYMMDD").fromNow()
    age = parseInt(age)
    return <p>{age}</p>*/