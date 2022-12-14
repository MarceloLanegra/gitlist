import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Overlay from "./Overlay";
import styled from "styled-components";
import { ButtonContrast } from "./Button";
import InputStyled from "./Input";
import ReactDOM from "react-dom";

const ModalContentStyled = styled.form`
  inline-size: 23.75rem;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
  padding: 1.5rem;
  border-radius: 0.5rem;
  position: fixed;
  inset-block-start: 50%;
  inset-inline-start: 50%;
  transform: translateY(-50%) translateX(-50%);
  .title {
    font: var(--headline2-semi-bold);
    margin: 0;
  }
  @media screen and (prefers-color-scheme: light) {
    background-color: var(--white);
    color: var(--black-2);
    border: 2px solid var(--grey);
  }
`;

const modalRoot = document.getElementById("portal");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default function Modal({isActive,setModal}) {
  if (isActive){
    return (
      <ModalPortal>
        <ModalContent setModal={setModal}/>
      </ModalPortal>
    );
  }
  return null
}

function ModalContent({setModal}) {
  const form = useRef(null);
  const navigator = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form.current);
    navigator(`/${formData.get("username")}`);
    setModal(false)
  }

  return (
    <Overlay>
      <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
        <h2 className="title">Busca a tu usuario favorito</h2>
        <InputStyled
          type="text"
          autoComplete="off"
          name="username"
          placeholder="Username"
        />
        <ButtonContrast text="Buscar" />
      </ModalContentStyled>
    </Overlay>
  );
}
