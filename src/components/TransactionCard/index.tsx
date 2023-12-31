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

export interface TransactionCardProps{
  type: 'positeve'|'negative'
  name: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface Props {
  data:TransactionCardProps;
}
export function TransactionCard({data}:Props){
  return(
    <Container>

      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type == 'negative' && '- '}
        {data.amount}
      </Amount>

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