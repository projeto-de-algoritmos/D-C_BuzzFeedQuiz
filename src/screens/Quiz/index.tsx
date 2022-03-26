import QuizTheme from '../../models/QuizTheme';
import Background from '../../components/Background';
import { useState, useEffect, useRef } from 'react'
import QuizComponent from '../../components/Quiz';
import { Container } from 'react-bootstrap';
import Character from '../../models/Character';
import { title } from 'process';
import Loading from '../../components/Loading';
import Result from '../../components/Result';
import selectBestCharacter from '../../utils/selectBestCharacter';

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
    const isFirstRun = useRef(true);

    useEffect(() => {
        setTimeout(() => {
            setScreenState(ScreenStates.QUIZ);
        }, 1000);
    }, []);

    useEffect(() => {

        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        if (currentQuestion + 1 < totalQuestions) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCharacter(selectBestCharacter(result, quizTheme.characters));
            setScreenState(ScreenStates.RESULT);
        }
    }, [result]);

    function handleSubmit(alternativeIndex: number) {
        setResult([
            ...result,
            alternativeIndex
        ]);
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
