import "./App.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";

function App() {

  
  const [form, setForm] = useState("");

  

  //função que armazena informações digitadas
 
  function handleChange(event) {

   
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log("form", form);
  }

  //função para enviar
  function handleSubmit(event) {
    event.preventDefault();
    
   
         if (form.peso !== "" && form.altura !== ""){
            const imc = form.peso / (form.altura * form.altura);
            alert("Seu IMC é " + imc.toFixed(1));
          } else {
              return alert("Altura e peso devem ser digitadas!!!");
      
            }
  }
 
  
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
         <div className="form">
          <div className="containerInputLabel">
            <div className="childenContainerInputLabel">
              <label>Qual sua altura?</label>
              <InputMask
                placeholder="ALTURA"
                onChange={handleChange}
                name="altura" 
                mask="9.99"
              />
            </div>
            <div className="childenContainerInputLabel">
              <label>Qual seu peso?</label>
              <InputMask 
                placeholder="PESO"
                onChange={handleChange}
                name="peso"
              />
            </div>
          </div>
          <div className="containerButton">
            <button>CALCULAR IMC</button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default App;