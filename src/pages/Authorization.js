import "./sty.css"

function Authorization ({active, setActive, children} ) {

    

    return (
  <div className={active ? "modal active" : "modal"} onClick={()=> setActive (false)}>
           
           
            <div className={active ? "modal__content active" : "modal__content"} onClick={e =>e.stopPropagation()} >
                      <p className="pp">Авторизация</p>

          <label for="username">Имя пользователя</label>
          <input type="text" placeholder="Логин" id="username"/>

          <label for="password">Пароль</label>
          <input type="password" placeholder="Пароль" id="password"/>
          <br/> <br/>
              <div className={"gggg"}>
              <button className="yy">Войти</button>
              </div> 
                      </div>
 </div>

    );
}
export default Authorization;