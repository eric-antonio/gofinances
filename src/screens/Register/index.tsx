import React , {useState}from "react";
import { 
  Keyboard, 
  Modal , 
  TouchableWithoutFeedback,
  Alert
} from "react-native";

import * as Yup from 'yup';
import  { yupResolver } from '@hookform/resolvers/yup';


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

const schema  =  Yup.object().shape({
  name: Yup.
  string().
  required('Name is required'),

  amount: Yup
  .number()
  .typeError('Insert a number')
  .positive("The amount can't be less than zero")
  .required('Amount required')
})

export function Register() {

  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [categoryState, setCategoryState] = useState({
    key: 'category',
    name: 'Categoria',
  });


  const {
    control,
    handleSubmit,
    formState:{ errors }
  } = useForm({

    resolver:yupResolver(schema)

  });
  

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

    if(!transactionType)

      return Alert.alert('Select the transaction type!');

    if(categoryState.key === 'category')

      return Alert.alert('Select the Category!');



    const data ={
      name: form.name,
      amount: form.amount,
      transactionType,
      categoryState: categoryState.key
    }

    try {

      const data  = '@gofinances:transactions';
      
      
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar");
    }
  }



  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

    
        <Form>
          <Fildes>
            <InputFrom
              name="name"
              control = {control}
              placeholder="Name"
              autoCapitalize="sentences"
              autoCorrect={false}
              error = {errors.name && errors.name.message}
            />

            <InputFrom
              control={control}
              name="amount"
              placeholder="Amount"
              keyboardType="numeric"
              error = {errors.amount && errors.amount.message}
            
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
