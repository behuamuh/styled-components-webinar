import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import logo from '../../logo.svg';
import { DARK_BUTTON, LIGHT_BUTTON } from '../../styles/const';
import { Button, buttonStyles } from '../../styles/primitives';

const Page = (props) => {
  const [disabled, setDisabled] = useState(false);

  const handleDarkClick = () => alert('clicked');
  const handleLightClick = () => {
    setDisabled(!disabled);
  }

  return (
    <Wrapper className={props.className}>
      <header className="App-header">
        Learn Styled components
      </header>
      <Image src={logo} alt="logo" />
      <Button color="blue" onClick={handleLightClick}>
        Learn
      </Button>
      <DarkButton onClick={handleDarkClick} disabled={disabled}>
        Learn
      </DarkButton>
      <LightLinkButton href="https://ya.ru">
        link to ya.ru
      </LightLinkButton>
      <p>Just text</p>
      <List>
        {[1,2,3,4,5].map(n => (
          <ListItem key={n}>{n}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

export default Page;

const LightLinkButton = styled.a`
  background-color: ${LIGHT_BUTTON};
  ${buttonStyles}
  text-decoration: none;
  display: none;
`;

const ListItem = styled.li`
  margin-top: 12px;

  :first-child {
    margin-top: 0;
  }
`;

const List = styled.ul`
  margin: 0;

  && ${ListItem} {
    color: yellow;
  }
`;

const Wrapper = styled.div`
  padding: 16px;
  :hover {
    ${LightLinkButton} {
      display: inline-block;
    }
  }

  p {
    color: green;
    margin: 0;
  }

  &&&& ${ListItem} {
    color: red;
  }
`;

const DarkButton = styled(Button)`
  background-color: ${DARK_BUTTON};
  opacity: ${({ disabled }) => disabled ? 0.6 : 1};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
`;

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled.img`
  animation: ${logoSpin} infinite 20s linear;
`;
