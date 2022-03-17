import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import ButtonComponent from '../src/components/Button'
import InputComponent from '../src/components/Input'
import db from "../assets/db.json"
import CardComponent from '../src/components/Card'

const Home: NextPage = () => {

  const router = useRouter();
  const [username, setUsername] = useState<string>("");

  function handleInput(e: any) {
    setUsername(e.target.value);
  }

  function handleSubmit(e: any, id: string) {
    e.preventDefault();

    localStorage.setItem("username", username);

    router.push(`/quiz?id=${id}`);
  }

  return (
    <>
      <Container>
        <CardComponent
          title="Projeto de Algoritmos: Dividir e Conquistar"
          text="Seja bem vindo ao Super Quiz! Informe seu nome e escolha o tema:"
        >
          <Row>
            <Col>
              <InputComponent
                label="Nome"
                placeholder="Insira seu nome"
                value={username}
                onChange={(e: any) => handleInput(e)}
              />
            </Col>
          </Row>
          <Row>

            {db.map((quiz: any) => {
              return (
                <Col md={4} className='d-flex justify-content-center'>
                  <ButtonComponent
                    key={quiz.id}
                    text={quiz.title}
                    onClick={(e: any) => handleSubmit(e, quiz.id)}
                    disabled={username.length < 1} />
                </Col>
              );
            })}
          </Row>
        </CardComponent>
      </Container>
    </>
  )
}

export default Home;
