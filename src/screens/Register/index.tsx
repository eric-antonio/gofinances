import React from "react";
import { Input } from "../../components/Form/Input/index";
import { Button } from "../../components/Form/Button/index";
import { Container, Header, Title,Form,Fildes } from "./styles";

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

        </Fildes>

        <Button
          title="Enviar"
        />

      </Form>

    </Container>
  );
}
