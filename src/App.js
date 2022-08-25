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
   
    if (form.altura !== "" && form.peso !== "") {
      const imc = form.peso / (form.altura * form.altura);
      console.log("imc", imc);
      alert("Seu IMC é " + imc);
    } else {
      alert("Altura e peso devem ser digitados!!!");
    }
    //Desafio: implemente uma lógica para verificar o IMC, e junto com o Alert, mostrar a classificação do IMC
    //Por exemplo: "Seu IMC é 30 e sua Classificação é Sobrepeso"
    // if ("alguma coisa") {
    //   "isso acontece"
    // }
    // else {
    //   "outra coisa acontece"
    // }

    // // ou você pode precisar por mais de 2 condições, e usar o Else If
    // if ("alguma coisa") {
    //   "isso acontece"
    // }
    // else if ("outra coisa") {
    //  "outra coisa acontece"
    // }
    // else {
    //   "por fim isso acontece"
    // }
  }

  //JSX, equivale ao nosso HTML e CSS
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