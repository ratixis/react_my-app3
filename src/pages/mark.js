
import { sha256 } from 'js-sha256';
import "./sty.css";
import axios from 'axios';





function Mark(){





  async function componentDidMount (e)  {
    
    
    e.preventDefault();
    var pass  = e.target.elements.pass.value;
    var user  = e.target.elements.user.value;
    try {
      var response = await axios.get(`http://localhost:5166/api/users/${user}/${sha256(pass)}`);
      if (response.status === axios.HttpStatusCode.Ok) {
        console.log(response);
      }
    }
    catch(exception) {
      console.log('Request error');
    }

}
    return (
      
        <div className= "modal__content active">
        <form onSubmit={componentDidMount}>

        <label for="username">Email</label>
        <input  type="text" placeholder="Email" id="username"/>
        
          <label for="name">Имя пользователя</label>
          <input  type="text" placeholder="name" id="name"  name="user"/>
                    
          <label for="password">Пароль</label>
          <input type="password" placeholder="pass" name="pass" id="pass" /> 

          <button >Войти</button>

           

        </form>
        </div>    
  

    )
};
export default Mark;



                                                              
                      

