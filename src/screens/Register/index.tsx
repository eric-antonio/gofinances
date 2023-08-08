import React , {useState}from "react";
import { Modal } from "react-native";

import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Form/Button/index";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import {CategorySelect} from '../CategorySelect/index'

import { 
  Container,
  Header, 
  Title,
  Form,
  Fildes, 
  TransactionTypes
} from "./styles";



export function Register() {
  // Esse estado serve para ajuda a identificar que botão esta a ser selecionado!
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const [categoryState, setCategoryState] = useState({
    key: 'category',
    name: 'Categoria',
  });
  
  // ? Temos aqui a função 
  function handelTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handelOpenSelectCategoryModal(){
    setCategoryModalOpen(true)

  }

  function handelCloseSelectCategoryModal(){
    setCategoryModalOpen(false)

  }



  return (
    <Container>
      {/*  Titulo da Pagina  */}
      <Header>
        <Title>Register</Title>
      </Header>

      {/* Formularios  */}
      <Form>

        <Fildes>

          <Input
            placeholder="Name"
          />

          <Input
            placeholder="Price"
          />

          <TransactionTypes>
            <TransactionTypeButton
              type="up"
              title="Income"
              onPress={() => handelTransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />

            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handelTransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />

          </TransactionTypes>

          <CategorySelectButton 
            title={categoryState.name}
            onPress = {handelOpenSelectCategoryModal}
          />

        </Fildes>

        {/* Botão laranja! */}
        <Button
          title="Send"
        />

      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category = {categoryState}
          steCategory = {setCategoryState}
          closeSelectCategory = {handelCloseSelectCategoryModal}
          
        />
      </Modal>

    </Container>
  );
}
