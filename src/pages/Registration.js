
import { useState } from "react";
import { sha256 } from 'js-sha256';
import "./sty.css";
import axios  from 'axios';
import { useNavigate } from "react-router-dom";

const url = 'http://localhost:5166/api/users';

function Registration ({active, setActive} ) {
  
  const navigate = useNavigate()
  const [email , setEmail] = useState('');
  const [name , setName] = useState('');
  const [pass , setPass] = useState('');

  const [emailDirty , setEmailDirty ] = useState(false);
  const [nameDirty  , setNameDirty ] = useState(false);
  const [passDirty  , setPassDirty ] = useState(false);

  const [emailError , setEmailError] = useState('Email не может быть пустым');
  const [nameError , setNameError] = useState('Логин не может быть пустым');
  const [passError , setPassError] = useState('Пароль не может быть пустым');
  
 
 
 
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url,{name : name, email : email, password : sha256(pass)});
      if ({response}) {
        console.log(response)
        navigate('/Statistics')
      }
    }
     catch(error){
     console.log(error.response);
    }
  };

 const blurHandler =(e) =>{
  switch(e.target.name){
    case 'email':
      setEmailDirty(true)
break
    case 'name':
      setNameDirty(true)
break
    case 'pass':
      setPassDirty(true) 
break        
  }
 };

 const nameHandler =(e) =>{
  setName(e.target.value)
  var nameRegex = /^[a-zA-Z\-]+$/;
  if (!nameRegex.test(String(e.target.value).toLowerCase())) {
    setNameError('Некорректное имя пользователя')

  }
  else {
    setNameError("")
  }
 }

 const emailHandler = (e) => {
  setEmail(e.target.value)
  const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(String(e.target.value).toLowerCase())){
setEmailError('Некорректный Email')
  }
  else{
    setEmailError("")
  }
 };

 const passHandler =(e) => {
  setPass(e.target.value)
  if (e.target.value.length < 4 || e.target.value.length > 8){
    setPassError('Пароль должен быть длинее 4 и меньше 8')
  if (!e.target.value){
    setPassError('Пароль не может быть пустым')
  }
  
  } 

  else {
    setPassError("")
  }
 }
 
  
    return (
  <div className={active ? "modal active" : "modal"} onClick={()=> setActive (false)}>
           
           
            <div className={active ? "modal__content active" : "modal__content"} onClick={e =>e.stopPropagation()} >
            <p className="pp">Регистрация</p>
      <form onSubmit={handleSubmit}>     
          
           
          <label htmlFor='email' >Email</label>
          {(emailDirty && emailError )&& <div style={{ color: "#9f1515",display: 'flex'}} >{emailError}</div>}
          <input onBlur={e => blurHandler(e)}  type="text" placeholder="Email" id="email" name="email" value={email} onChange={e=>emailHandler(e)}/>
        
          <label for="name">Имя пользователя</label>
          {(nameDirty && nameError )&& <div style={{ color: "#9f1515",display: 'flex'}}>{nameError}</div>}
          <input onBlur={e => blurHandler(e)}  type="text" placeholder="Логин" id="name"  name="name"value={name} onChange={e=>nameHandler(e)}/>
                    
          <label for="pass">Пароль</label>
          {(passDirty && passError )&& <div style={{ color: "#9f1515",display: 'flex'}}>{passError}</div>}
          <input onBlur={e => blurHandler(e)}  type="password" placeholder="Пароль" name="pass" id="pass"value={pass} onChange={e=>passHandler(e)} />     

                        
                          
                        <button  className='yy buttonn gggg'>Зарегистрироваться</button>
                        
                        </form> 
            </div>
 </div>

    );
}
export default Registration;