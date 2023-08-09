import React , {useState}from "react";
import { Modal , TouchableWithoutFeedback} from "react-native";
import { useForm}  from'react-hook-form'

import { Input } from "../../components/Form/Input/index";
import { InputFrom } from "../../components/Form/InputFrom/index";
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


interface FromData{
  name: string;
  amount: string
}

export function Register() {
  // Esse estado serve para ajuda a identificar que botão esta a ser selecionado!
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);




  const [categoryState, setCategoryState] = useState({
    key: 'category',
    name: 'Categoria',
  });


  const {
    control,
    handleSubmit
  } = useForm();
  
  // ? Temos aqui a funções  da App
  function handelTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handelOpenSelectCategoryModal(){
    setCategoryModalOpen(true)

  }

  function handelCloseSelectCategoryModal(){
    setCategoryModalOpen(false)

  }

  function handelRegister(form: FromData){
    const data ={
      name: form.name,
      amount: form.amount,
      transactionType,
      categoryState: categoryState.key
    }
    console.log(data);
  }



  return (
    <TouchableWithoutFeedback>
      <Container>

        <Header>
          <Title>Register</Title>
        </Header>

        <Form>
          <Fildes>
            <InputFrom
              control={control}
              name="name"
              placeholder="Name"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputFrom
              control={control}
              name="amount"
              placeholder="Amount"
              keyboardType="numeric"
            
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

          <Button
            title="Send"
            onPress={handleSubmit(handelRegister)}
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
      
    </TouchableWithoutFeedback>
  );
}
