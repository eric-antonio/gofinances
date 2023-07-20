import React from "react";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Form/Button/index";
import { Container, Header, Title,Form,Fildes } from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

export function Register() {
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

          <TransactionTypeButton
            type="up"
            title="Income"
          />

          <TransactionTypeButton
            type="down"
            title="Income"
          />

        </Fildes>

        <Button
          title="Enviar"
        />

      </Form>

    </Container>
  );
}
