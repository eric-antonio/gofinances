import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
  TurnoffButton

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard , TransactionCardProps} from "../../components/TransactionCard";


export interface  DataListProps extends TransactionCardProps{
  id: string;
}

export function Dashboard(){
  // const data :  DataListProps[] = [
  const [data, setData] = useState<DataListProps[]>([]);
  

  async function loadTransaction(){
    const dataKey =  '@gofinances:transactions';
    const transaction = await AsyncStorage.getItem(dataKey);

  }

  useEffect(()=>{
    loadTransaction();
  },[])

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

          <TurnoffButton onPress = {()=>{}}>
            <Icon name='power'/>
          </TurnoffButton>
          
          
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


      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor = { item => item.id}
          renderItem= {({item}) => <TransactionCard data={item}/> }

        />
      </Transactions>
     
    </Container>
  )
}

