import QuizTheme from '../../models/QuizTheme';
import Background from '../../components/Background';
import { useState, useEffect } from 'react'
import QuizComponent from '../../components/Quiz';
import { Container } from 'react-bootstrap';
import Character from '../../models/Character';
import { title } from 'process';
import Loading from '../../components/Loading';
import Result from '../../components/Result';

enum ScreenStates {
    QUIZ,
    LOADING,
    RESULT,
}

type Props = {
    quizTheme: QuizTheme
}

export default function QuizScreen({ quizTheme }: Props) {
    const [screenState, setScreenState] = useState<ScreenStates>(ScreenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState<number[]>([]);
    const [character, setCharacter] = useState<Character>();
    const totalQuestions = quizTheme.questions.length;

    console.log(result);

    useEffect(() => {
        setTimeout(() => {
            setScreenState(ScreenStates.QUIZ);
        }, 2000);
    }, []);

    function handleSubmit(alternativeIndex: number) {
        setResult([
            ...result,
            alternativeIndex
        ])

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setCharacter(new Character("", "", "", []));
            setScreenState(ScreenStates.RESULT);
        }
    }

    return (
        <Background>
            <Container className="w-50">
                {screenState == ScreenStates.QUIZ && <QuizComponent question={quizTheme.questions[currentQuestion]} onSubmit={handleSubmit} />}
                {screenState == ScreenStates.LOADING && <Loading />}
                {screenState == ScreenStates.RESULT && <Result character={character} />}
            </Container>
        </Background>
    );
}
