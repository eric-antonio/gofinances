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
  name: string ;
  icon: string; 
}

interface Data{
  type: 'positeve'|'negative'
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data:Data;
}
export function TransactionCard({data}:Props){
  return(
    <Container>

      <Title>{data.title}</Title>

      <Amount>{data.amount}</Amount>

      <Footer>

        <Category>

          <Icon name={data.category.icon}/>
          <CategoryName>{data.category.name}</CategoryName>

        </Category>

        <Date>{data.date}</Date>

      </Footer>
    </Container>
  )
}