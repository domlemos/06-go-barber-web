import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <img src={logoImg} alt="" />
        <h1>Faça o seu logon</h1>
        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />
        <Button type="submit"> Entrar </Button>
        <a href="forgot"> Esqueci a minha senha </a>
      </form>
      <a href="forgot">
        <FiLogIn /> Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
