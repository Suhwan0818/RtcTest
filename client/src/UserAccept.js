import React from "react";
import styled from "styled-components";

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const YesButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: gray;
  color: #ffffff;

  margin: 0;
  padding: 0.5rem 1rem;

  font-size: 15px;
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  margin-top: 55px;

  border: none;
  border-radius: 4px;

  display: inline-block;
  width: auto;

  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  cursor: pointer;

  transition: 0.5s;
`;

const ModalContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  max-height: 80%;
  width: 20rem;
  height: 20%;
  padding: 16px;
  background: rgb(25, 31, 44);
  border-radius: 10px;
  text-align: center;
  }
`;

const NameSet = styled.div`
  color: white;
  font-size: 20px;
  margin-top: 20px;
`;

function UserAccept({ showModal, acceptCall, closeModal }) {
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal}>
          <ModalContainer>
            <NameSet>통화를 시작하시겠습니까?</NameSet>
            <YesButton onClick={acceptCall}>받기</YesButton>
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
}

export default UserAccept;
