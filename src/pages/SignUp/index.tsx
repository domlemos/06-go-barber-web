import React, { useCallback } from "react";
import { FiArrowLeft, FiMail, FiUser, FiLock } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um email válido"),
        password: Yup.string().min(
          6,
          "Senha obrigatória de no mínimo 6 digitos"
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <Form onSubmit={handleSubmit}>
          <img src={logoImg} alt="" />
          <h1>Faça o seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Password"
            type="password"
          />
          <Button type="submit"> Cadastrar </Button>
        </Form>
        <a href="forgot">
          <FiArrowLeft /> Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
