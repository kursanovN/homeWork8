import { Modal } from "../../modal/OpenModal";
import { useState } from "react";
import styled from "styled-components";
import { createPortal } from 'react-dom';

export const Header = () => {
  const [openModal, setModal] = useState(false);

  const OpenModalHendler = () => {
    setModal(!openModal);
  };
  return (
    <>
      {openModal && createPortal(<Modal close={OpenModalHendler}/>,document.getElementById('modal')) }
      <Headers>
        <H1>Favorite Movies</H1>
        <Buttons onClick={OpenModalHendler}>ADD MOVIE</Buttons>
      </Headers>
    </>
  );
};
const Headers = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px 0px 20px;
  background-color: darkblue;
`;
const Buttons = styled.button`
  width: 140px;
  height: 50px;
  background-color: #ff7200;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
`;
const H1 = styled.h1`
  color: #fff;
  font-weight: bold;
  font-size: 40px;
`;
