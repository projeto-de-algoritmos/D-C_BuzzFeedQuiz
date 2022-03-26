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

  function handleSubmit(id: string) {
    router.push(`/quiz?id=${id}`);
  }

  return (
    <Background backgroundUri={backgroundUri}>
      <Widget>
        <CardComponent header='Buzz Feed Quiz'>
          <CardComponent.Title>Projeto de Algoritmos: Dividir e Conquistar</CardComponent.Title>
          <CardComponent.Description>
            Seja bem vindo ao Super Quiz!
            <br />
            Descubra qual personagem você seria
          </CardComponent.Description>
          <hr />
          <h5 className='text-center mb-1'>Escolha o tema</h5>
          <Container className='d-flex justify-content-around'>
            {quizzes.map((quiz: any) => {
              return (
                <ButtonComponent
                  key={quiz.id}
                  text={quiz.title}
                  onClick={(e: Event) => handleSubmit(quiz.id)} />
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
  const quizzes = db.sort((a, b) => a.title.localeCompare(b.title));
  const backgroundUri = quizzes[randint(0, quizzes.length - 1)].bg;

  return {
    props: {
      backgroundUri,
      quizzes,
    }
  }
}
