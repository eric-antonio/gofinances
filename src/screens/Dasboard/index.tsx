import React from "react";
import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";


export function Dashboard(){
  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source = {{uri:'https://github.com/eric-antonio.png'}}/>

            <User>

              <UserGreeting>Olá,</UserGreeting>
              <UserName>Éric António </UserName>

            </User>

          </UserInfo>
          
          <Icon name='power'/>
        </UserWrapper>
        
      </Header>

      <HighlightCards>

        <HighlightCard 
          type="up"
          title="Entrdas" 
          amount="5.000,00MT" 
          lastTransaction="Ultima entrada dia 13 de Junho."
        />

        <HighlightCard 
          type="down"
          title="Saidas" 
          amount="300,00MT" 
          lastTransaction="Ultima saida dia 19 de Junho."
        />
        <HighlightCard 
          type="total"
          title="Total na conta" 
          amount="4.700,00MT" 
          lastTransaction="Ultima entrada dia 13 de Junho."
        />

      </HighlightCards>


      <Transactions>
        <Title>Listagem</Title>
      </Transactions>
     
    </Container>
  )
}

