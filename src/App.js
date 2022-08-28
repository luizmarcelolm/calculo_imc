import "./App.css";
import React, { useState } from "react";
import InputMask from "react-input-mask";



function App() {

  const [form, setForm] = useState("");

  //função que armazena informações digitadas
  function handleChange(event) {
   
    setForm({ ...form, [event.target.name]: event.target.value });
  }


  //função para enviar
  function handleSubmit(event) {
    
        //validação dos input
         if (form.peso > 0 && form.altura > 0 ){
            const imc = form.peso / (form.altura * form.altura);
            if (imc < 18.5)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - VOCÊ ESTA A BAIXO DO PESO.")

            else if (imc >= 18.5 && imc <= 24.9)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - PESO NORMAL.")

            else if (imc >= 18.5 && imc <= 29.9)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - PRÉ-OBESIDADE.")

            else if (imc >= 30.0 && imc <= 34.9)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - OBESIDADE GRAU 1.")

            else if (imc >= 35.0 && imc <= 39.9)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - OBESIDADE GRAU 2.")

            else if (imc >= 40.0)
            return alert("Seu IMC é " + imc.toFixed(1)+ " - OBESIDADE GRAU 3.")
                        
          }
          else if (form.peso === "" && form.altura === ""){
              event.preventDefault();

              return alert("PREENCHA OS CAMPOS CORRETAMENTE !!!");
           }
            else{
               event.preventDefault();
               return alert("PREENCHA OS CAMPOS CORRETAMENTE !!!");
                                        
            }          
  }

  //formulário da aplicação
  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
         <div className="form">
         <h1>CÁLCULO IMC</h1>
          <div className="containerInputLabel">
            <div className="childenContainerInputLabel">
              <label for="altura">Qual sua altura?</label>
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