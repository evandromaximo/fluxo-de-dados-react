import styled, { createGlobalStyle } from "styled-components";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import React, { useState } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [titulo, setTitulo] = useState("");
  const [imagem, setImagem] = useState("");
  const [descricao, setDescricao] = useState("")
  //console.log("App.js", descricao);
  return (
    <>
      <GlobalStyle />

      <Container>
        
        <FormularioPostagem
          titulo={titulo}
          setTitulo={setTitulo}

          imagem={imagem}
          setImagem={setImagem}
          
          descricao={descricao}
          setDescricao={setDescricao}

          />

        <TelaDaPostagem 
        titulo={titulo}
        imagem={imagem}
        descricao={descricao}
        />

      </Container>
    </>
  );
}

export default App;
