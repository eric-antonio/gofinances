import React , {useState, useEffect}from "react";
import { useForm}  from'react-hook-form';
import { useNavigation } from "@react-navigation/native";
import * as Yup from 'yup';
import  { yupResolver } from '@hookform/resolvers/yup';

import uuid from 'react-native-uuid';


import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keyboard, Modal , TouchableWithoutFeedback, Alert} from "react-native";

import { InputFrom } from "../../components/Form/InputFrom/index";
import { Button } from "../../components/Form/Button/index";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import {CategorySelect} from '../CategorySelect/index'
import { Container,Header, Title , Form, Fields, TransactionTypes} from "./styles";



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

  const dataKey  = '@gofinances:transactions';

  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);


  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const navigation = useNavigation();

  const {
    control,
    reset,
    handleSubmit,
    formState:{ errors }
  } = useForm({

    resolver:yupResolver(schema)

  });
  

  function handleTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  function handleOpenSelectCategoryModal(){
    setCategoryModalOpen(true)

  }

  function handleCloseSelectCategoryModal(){
    setCategoryModalOpen(false)

  }

  async function handleRegister(form: FromData){

    if(!transactionType)

      return Alert.alert('Select the transaction type!');

    if(category.key === 'category')

      return Alert.alert('Select the Category!');



    const newTransaction ={
      id:String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
      data : new Date(),
    }

    try {
      const data = await AsyncStorage.getItem(dataKey);

      const  currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ... currentData, newTransaction
      ];

      await AsyncStorage.setItem(dataKey,JSON.stringify(dataFormatted));

      // reset the fields 
      reset();
      setTransactionType('');
      setCategory({
        key: 'category',
        name: 'Categoria',
      });

      navigation.navigate('Listing');
            
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possivel salvar");
    }
  }

  useEffect(()=>{
    async function loadData(){
      const data = await AsyncStorage.getItem(dataKey);
      console.log(JSON.parse(data!))
    }

    loadData();
    // async function removeAll(){
    //   await AsyncStorage.removeItem(dataKey);
    // }
    // removeAll();
  },[]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>

        <Header>
          <Title>Register</Title>
        </Header>

        <Form>
          <Fields>
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
                onPress={() => handleTransactionTypeSelect('up')}
                isActive={transactionType === 'up'}
              />

              <TransactionTypeButton
                type="down"
                title="Outcome"
                onPress={() => handleTransactionTypeSelect('down')}
                isActive={transactionType === 'down'}
              />

            </TransactionTypes>

            <CategorySelectButton 
              title={category.name}
              onPress = {handleOpenSelectCategoryModal}
            />
          </Fields>

          <Button
            title="Send"
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category = {category}
            steCategory = {setCategory}
            closeSelectCategory = {handleCloseSelectCategoryModal}
          />
        </Modal>

      </Container>

    </TouchableWithoutFeedback>
  );
}
