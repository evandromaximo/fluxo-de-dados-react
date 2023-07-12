//import { useState } from "react"; //não é necessário pois o mesmo ja esta declarado no app.js
import {
  FormContainer,
  Form,
  Input,
  StyledLabel,
} from "./FormularioPostagem.styled";

export const FormularioCadastro = (props) => {

  const onChangeImagem = (event) => {
    //console.log(event.target.value);
    props.setImagem(event.target.value);
  };
  const onChangeDescricao = (event) => {
    //console.log ("descrição", event.target.value)
    props.setDescricao(event.target.value)
  }

  const onChangeTitulo = (event) => {
    //console.log(event.target.value)
    props.setTitulo(event.target.value)
  }

  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo"
          onChange={onChangeTitulo}
          value={props.titulo}
           />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" 
          onChange={onChangeImagem}
          value={props.imagem} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao"
          onChange={onChangeDescricao}
          value={props.descricao}
           />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

