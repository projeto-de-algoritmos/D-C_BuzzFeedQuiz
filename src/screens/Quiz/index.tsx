import QuizTheme from '../../models/QuizTheme';
import Background from '../../components/Background';
import { useState, useEffect } from 'react'
import Question from '../../models/Question';
import QuizComponent from '../../components/Quiz';

function Result() {
    return <div>Resultado</div>
}

function Loading() {
    return <div>Carregando</div>
}

enum ScreenStates {
    QUIZ,
    LOADING,
    RESULT,
}

export default function QuizScreen({ quizTheme }: Props) {
    const [screenState, setScreenState] = useState<ScreenStates>(ScreenStates.LOADING);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState<number[]>([]);
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
            setScreenState(ScreenStates.RESULT);
        }
    }

    return (
        <Background>
            {screenState == ScreenStates.QUIZ && <QuizComponent question={quizTheme.questions[currentQuestion]} onSubmit={handleSubmit} />}
            {screenState == ScreenStates.LOADING && <Loading />}
            {screenState == ScreenStates.RESULT && <Result />}
        </Background>
    );
}

type Props = {
    quizTheme: QuizTheme
}