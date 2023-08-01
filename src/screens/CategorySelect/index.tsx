import React from 'react'
import {
  Container,
  Header,
  Title
} from './styles'


interface  Category{
  key:string;
  name: string;
}

interface Props{
    category: string
    steCategory: (category : Category) => void;
    closeSelectCategory:()=> void;
}

export function CategorySelect(
  { category,
    steCategory,
    closeSelectCategory
  }:Props){

  return (
    <Container>
      <Header>
        <Title> Categoria </Title>
      </Header>
    </Container>
  )
}
