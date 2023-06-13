
import { useState } from "react";
import { sha256 } from 'js-sha256';
import "./sty.css";
import axios  from 'axios';


const url = 'http://localhost:5166/api/users';

function Registration ({active, setActive, children} ) {

  const [email , setEmail] = useState('');
  const [name , setName] = useState('');
  const [pass , setPass] = useState('');
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url,{name : name, email : email, password : sha256(pass)});
      if (response.status === axios.HttpStatusCode.NoContent) {
        this.close();
      }
  
    } catch(error){
    console.log(error.response);
    }
  };

    return (
  <div className={active ? "modal active" : "modal"} onClick={()=> setActive (false)}>
           
           
            <div className={active ? "modal__content active" : "modal__content"} onClick={e =>e.stopPropagation()} >
      <form onSubmit={handleSubmit}>     
          <p className="pp">Регистрация</p>
           
          <label htmlFor='email' >Email</label>
          <input   type="text" placeholder="Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
          <label for="name">Имя пользователя</label>
          <input  type="text" placeholder="name" id="name"  name="name"value={name} onChange={(e)=>setName(e.target.value)}/>
                    
          <label for="pass">Пароль</label>
          <input type="password" placeholder="pass" name="pass" id="pass"value={pass} onChange={(e)=>setPass(e.target.value)} />     

                        <div className= {"gggg"}>
                          
                        <button className='yy buttonn'>Зарегистрироваться</button>
                        </div>
                        </form> 
            </div>
 </div>

    );
}
export default Registration;