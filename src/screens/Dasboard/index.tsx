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
import { TransactionCard , TransactionCardProps} from "../../components/TransactionCard";


export interface  DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){
  // const data :  DataListProps[] = [
  const data = [
    {
      id:'1',
      type:'positive',
      title:"Desenvolvimento de Site",
      amount:"12.000,00MT",
      category:{
        name:'Vendas',
        icon:'dollar-sign',
      },
      date:"11/07/23"
    },
    {
      id:'2',
      type:'negative',
      title:"Jantar Com Mor(El Patron)",
      amount:"15.000,00MT",
      category:{
        name:'Alimentação',
        icon:'coffee',
      },
      date:"08/07/23"
    },
    {
      id:'3',
      type:'negative',
      title:"Aluguel do apartamento",
      amount:"17.000,00MT",
      category:{
        name:'Casa',
        icon:'home',
      },
      date:"5/07/23"
    },
    {
      id:'4',
      type:'positive',
      title:"Toyota Mark-X 2010",
      amount:"560.000,00MT",
      category:{
        name:'Vendas',
        icon:'shopping-bag',
      },
      date:"01/07/23"
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
          amount="12.000,00MT" 
          lastTransaction="Ultima entrada dia 01 de Julho."
        />

        <HighlightCard 
          type="down"
          title="Saidas" 
          amount="15.000,00MT" 
          lastTransaction="Ultima saida dia 08 de Julho."
        />
        <HighlightCard 
          type="total"
          title="Total na conta" 
          amount="540.000,00MT" 
          lastTransaction="Ultima entrada dia 13 de Junho."
        />

      </HighlightCards>



      </Transactions>
     
    </Container>
  )
}

