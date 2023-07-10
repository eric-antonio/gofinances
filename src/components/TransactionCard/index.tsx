import React from "react";
import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date
}
from './styles'

interface CategoryProps{
  key: string;
  name: string ;
  icon: string; 
}

interface Props {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}
export function TransactionCard({
  title,
  amount, 
  category, 
  date 
}:Props){
  return(
    <Container>
      <Title> Desevolvimento de site</Title>
      <Amount> 12.000,00Mt</Amount>
      <Footer>
        <Category>
          <Icon name="dollar-sign"/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date> 10/07/23 </Date>
      </Footer>
    </Container>
  )
}