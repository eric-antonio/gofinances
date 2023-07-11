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
  Title,
  TransactionList,

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard } from "../../components/TransactionCard";
import { getBottomSpace } from "react-native-iphone-x-helper";


export function Dashboard(){
  const data = [
    {
      title:"Desenvolvimento de Site",
      amount:"12.000,00MT",
      category:{
        name:'Vendas',
        icon:'dollar-sign',
      },
      date:"11/07/23"
    },
    {
      title:"Desenvolvimento de Site",
      amount:"12.000,00MT",
      category:{
        name:'Vendas',
        icon:'dollar-sign',
      },
      date:"11/07/23"
    },
    {
      title:"Desenvolvimento de Site",
      amount:"12.000,00MT",
      category:{
        name:'Vendas',
        icon:'dollar-sign',
      },
      date:"11/07/23"
    },
  ]

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
          amount="45.000,00MT" 
          lastTransaction="Ultima entrada dia 13 de Junho."
        />

        <HighlightCard 
          type="down"
          title="Saidas" 
          amount="3.000,00MT" 
          lastTransaction="Ultima saida dia 19 de Junho."
        />
        <HighlightCard 
          type="total"
          title="Total na conta" 
          amount="42.000,00MT" 
          lastTransaction="Ultima entrada dia 13 de Junho."
        />

      </HighlightCards>


      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          renderItem= {({item}) => <TransactionCard data={item}/> }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: getBottomSpace( )
          }}
        />
      </Transactions>
     
    </Container>
  )
}

