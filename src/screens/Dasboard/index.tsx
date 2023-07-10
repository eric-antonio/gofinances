import React from "react";

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
  HighlightCards

} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";


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
          <Icon name='power'/>
        </UserWrapper>
        
      </Header>

      <HighlightCards 
        horizontal
        showsHorizontalScrollIndicator={false}
      >

        <HighlightCard/>
        <HighlightCard/>
        <HighlightCard/>

      </HighlightCards>
     
    </Container>
  )
}

