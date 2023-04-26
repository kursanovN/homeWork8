import { useState } from "react";
import styled from "styled-components";

export const Modal = ({ close }) => {
  const [inputText, setInputText] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputRating, setInputRating] = useState("");

  const inputTextValue = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Modale>
      <Form className="modal-block">
        <Div>
          <Label>Title:</Label>
          <Input type="text" value={inputText} onChange={inputTextValue} />
        </Div>
        <Div>
          <Label>URL:</Label>
          <Input type="url" />
        </Div>
        <Div>
          <Label>Rating:</Label>
          <Input type="number" />
        </Div>
        <dvi className="btn">
          <Button1 onClick={close}>Cencel</Button1>
          <Button2>ADD</Button2>
        </dvi>
      </Form>
    </Modale>
  );
};

const Modale = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 50vw;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Label = styled.label`
  font-size: 30px;
  font-weight: bold;
`;
const Input = styled.input`
  width: 35vw;
  height: 5vh;
  border-radius: 10px;
  border: 3px solid;
  font-size: 23 px;
`;
const Button1 = styled.button`
  width: 120px;
  height: 45px;
  background-color: #08088;
  color: #000;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 500px;
`;
const Button2 = styled.button`
  width: 120px;
  height: 45px;
  background-color: #001fff;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  margin-left: 40px;
`;
