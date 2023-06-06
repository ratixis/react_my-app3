
import { sha256 } from 'js-sha256';
import React from "react";
import "./sty.css";

function Mark(){
   
   
   

      const handleSubmit = (e) => {
        //Prevent page reload
        e.preventDefault();
        var pass  = e.target.elements.pass.value;
        console.log(sha256(pass));
      };
    
    return (
      
        <div className="form">
        <form onSubmit={handleSubmit}>
                    
          <label for="password">Пароль</label>
          <input type="password" placeholder="Пароль" name="pass" required />          
          <button className="yy" type="submit"  >Зарегистрироваться</button>
          
        </form>
      </div>
  

    )
};
export default Mark;



                                                              
                      

