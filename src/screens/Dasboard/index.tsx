import React from "react";
import { Text, View } from "react-native";
import { 
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper

} from "./styles";


export function Dashboard(){
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
        </UserWrapper>
      </Header>
    </Container>
  )
}

