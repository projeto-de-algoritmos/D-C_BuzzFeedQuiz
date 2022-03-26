import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import ButtonComponent from '../src/components/Button'
import InputComponent from '../src/components/Input'
import db from "../assets/db.json"
import CardComponent from '../src/components/Card'
import Background from '../src/components/Background'
import { randint } from '../src/utils/random';
import Widget from '../src/components/Widget'


const Home: NextPage = ({ backgroundUri, quizzes }: any) => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const localStorageUsername = "username";

  useEffect(() => {
    setUsername(localStorage.getItem(localStorageUsername) ?? "");
  }, []);

  function handleInput(e: any) {
    setUsername(e.target.value);
  }

  function handleSubmit(e: any, id: string) {
    e.preventDefault();

    localStorage.setItem(localStorageUsername, username);

    router.push(`/quiz?id=${id}`);
  }

  return (
    <Background backgroundUri={backgroundUri}>
      <Widget>
        <CardComponent header='Buzz Feed Quiz'>
          <CardComponent.Title>Projeto de Algoritmos: Dividir e Conquistar</CardComponent.Title>
          <CardComponent.Description>
            Seja bem vindo ao Super Quiz!
            <p className='mb-0'>Descubra qual personagem você seria</p>
          </CardComponent.Description>
          <hr/>

          <InputComponent
            label="Insira o seu nome para jogar"
            placeholder="Nome"
            value={username}
            onChange={(e: Event) => handleInput(e)}
          />
          <hr/>

          <span className='text-center mb-0'>Escolha o tema</span>
          <Container className='d-flex justify-content-around'>
            {quizzes.map((quiz: any) => {
              return (
                <ButtonComponent
                  key={quiz.id}
                  text={quiz.title}
                  onClick={(e: Event) => handleSubmit(e, quiz.id)}
                  disabled={username.length < 1} />
              );
            })}
          </Container>
        </CardComponent>
      </Widget>
    </Background>
  )
}

export default Home;

export function getServerSideProps(context: any) {
  const quizzes = db;
  const backgroundUri = quizzes[randint(0, quizzes.length-1)].bg;

  return {
      props: {
        backgroundUri,
        quizzes,
      }
  }
}
