import React from "react";
import { ContainerPostagem, Title, Image, Description } from "./TelaDaPostagem.styled";

const TelaDaPostagem = (props) => {
  console.log("postagem", props);
  return (
    <ContainerPostagem>
      <Title>{props.titulo}</Title>
      <Image src={"https://picsum.photos/536/354"} alt="imagem aleatória"/>
      <Description>{props.descricao}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;
