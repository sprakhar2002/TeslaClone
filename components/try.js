import React, { useState } from "react";
import styled from "styled-components";



const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};



const ButtonToggle = styled(Button)`
  opacity: 0.7;
  padding: 10px 100px;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;



function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

const types = ["First Preference", "Second Preference", "Third Preference"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
    <div>
    <h1>
    NAME OF SCRIBE--------rating:2.5/5

    </h1>
    <h6>
    25 exams taken 
    </h6>
       
        <h2>
          Reviews 
    </h2>
        
    <div>
Make sure that your Language Translator service instance is on an Advanced or Premium pricing plan. The Lite and Standard plans do not support customization.
Copy the API Key and URL values for your service instance. For more information about finding the values, see Getting started with Language Translator.
</div>
<div>
Make sure that your Language Translator service instance is on an Advanced or Premium pricing plan. The Lite and Standard plans do not support customization.
Copy the API Key and URL values for your service instance. For more information about finding the values, see Getting started with Language Translator.
</div>

    </div>
      
      
      
      
      <ToggleGroup />
      
    </>
  );
}