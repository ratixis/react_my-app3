import "./sty.css"

function Registration ({active, setActive, children} ) {

    

    return (
  <div className={active ? "modal active" : "modal"} onClick={()=> setActive (false)}>
           
           
            <div className={active ? "modal__content active" : "modal__content"} onClick={e =>e.stopPropagation()} >
            <p className="pp">Регистрация</p>
                        <label for="username">Email</label>
                        <input  type="text" placeholder="Email" id="username"/>

                        <label for="username">Имя пользователя</label>
                        <input  type="text" placeholder="Логин" id="username"/>
                        
                        <label for="password">Пароль</label>
                        <input type="password" placeholder="Пароль" id="password"/>

                        <div className= {"gggg"}>
                          
                        <button className="yy">Зарегистрироваться</button>
                        </div>
            </div>
 </div>

    );
}
export default Registration;