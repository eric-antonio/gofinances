import React from 'react'
import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
  ButtonText
} from './styles'
import { FlatList } from 'react-native';
import { categories } from '../../utils/categories';
import { Button } from '../../components/Form/Button';


interface  Category{
  key:string;
  name: string;
}

interface Props{
    category: Category;
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
        <Title> Category</Title>
      </Header>

      <FlatList
        data={categories}
        style={{flex:1, width:'100%'}}
        keyExtractor={(item) => item.key}
        renderItem={({item})=> (
          <Category>
            <Icon name = {item.icon}/>
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={()=> <Separator/>}
      />


      <Footer>
        <Button 
          title = 'Select'
          onPress={closeSelectCategory}
          >
        </Button>
      </Footer>


    </Container>
  )
}
