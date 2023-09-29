import "./card.css";
import contact from "./Contact.js"

const Card=(contact)=>{
    const {id,usernme,email,imgUrl}=contact
    return(
        <div className="carddiv">
           <img src={imgUrl} alt="userpic"/>
            <h1>{id}</h1>
            <h3>{usernme}</h3>
            <p>{email}</p>
            
        </div>
       
    )
  

}

export default Card