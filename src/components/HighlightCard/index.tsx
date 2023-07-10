import React from "react";
import { 
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
  

} from "./styles";

export function HighlightCard(){
  return(
    <Container>

      <Header>
        <Title> Entrada </Title>
        <Icon name='arrow-up-circle'/>
      </Header>
      <Footer>
        <Amount>17,400,00MT</Amount>
        <LastTransaction>Ultima entrada dia 13 de Junho.</LastTransaction>
      </Footer>

    </Container>
  )
}