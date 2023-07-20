import React , {useState}from "react";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Form/Button/index";
import { Container, Header, Title,Form,Fildes , TransactionTypes} from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>


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
            />

            <TransactionTypeButton
              type="down"
              title="Outcome"
              onPress={() => handelTransactionTypeSelect('down')}
            />
          </TransactionTypes>

        </Fildes>

        <Button
          title="Enviar"
        />

      </Form>

    </Container>
  );
}
