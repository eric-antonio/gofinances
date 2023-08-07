import React , {useState}from "react";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Form/Button/index";
import { Container, Header, Title,Form,Fildes , TransactionTypes} from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { Category } from "../../components/TransactionCard/styles";
import { CategorySelect } from "../../components/Form/CategorySelect";
export function Register() {
  // Esse estado serve para ajuda a identificar que botão esta a ser selecionado!
  const [transactionType, setTransactionType] = useState('');
  
  // TODO: Temos aqui a função 
  function handelTransactionTypeSelect(type: 'up' | 'down'){
    setTransactionType(type);
  }

  return (
    <Container>
      {/*  Titulo da Pagina  */}
      <Header>
        <Title>Cadastro</Title>
      </Header>

      {/* Formularios  */}
      <Form>

        <Fildes>

          <Input
            placeholder="Nome"
          />

          <Input
            placeholder="Preço"
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
          <CategorySelect title="Categoria"/>

        </Fildes>

        {/* Botão laranja! */}
        <Button
          title="Enviar"
        />

      </Form>

    </Container>
  );
}
