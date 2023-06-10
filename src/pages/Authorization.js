import "./sty.css"
import { sha256 } from 'js-sha256';

import axios from 'axios';

function Authorization ({active, setActive, children} ) {

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
  <div className={active ? "modal active" : "modal"} onClick={()=> setActive (false)}>
           
           
            <div  className={active ? "modal__content active" : "modal__content" } onClick={e =>e.stopPropagation()} >
                      <p className="pp">Авторизация</p>
<form onSubmit={componentDidMount} >
          <label for="username">Имя пользователя</label>
          <input type="text" placeholder="Логин" id="username"  name="user"/>

          <label for="password">Пароль</label>
          <input type="password" placeholder="Пароль" id="password"  name="pass"/>
          <br/> <br/>
              <div className={"gggg"}>
              <button className='yy buttonn'>Войти</button>
              </div> 
              </form>
                      </div>
 </div>

    );
}
export default Authorization;