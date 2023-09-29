
import './App.css';
import Card from "./components/Card";
import contact from "./components/Contact";

const createCard=(contact)=>{
 
   return(
   
    <div>

     
<Card id={contact.id} usernme={contact.usernme} email={contact.email} imgUrl={contact.imgUrl}/>
    </div>
    
   )
}

function App() {
  

  
  return (
    
    <div className="App">
       
     {contact.map(createCard)
     }
     
    </div>
  );
}

export default App;
