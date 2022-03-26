import QuizTheme from '../../models/QuizTheme';
import { useState, useEffect } from 'react'
import { QuizComponent, QuizComponentProps } from '../../components/Quiz';
import Character from '../../models/Character';
import Loading from '../../components/Loading';
import Result from '../../components/Result';
import Widget from '../../components/Widget';
import CardComponent from '../../components/Card';

enum ScreenStates {
    QUIZ,
    LOADING,
    RESULT,
}

export default function QuizScreen({ quizTheme }: QuizScreenProps) {
    const [screenState, setScreenState] = useState<ScreenStates>(ScreenStates.LOADING);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [result, setResult] = useState<number[]>([]);
    const [character, setCharacter] = useState<Character>();
    const totalQuestions = quizTheme.questions.length;
    const currentQuestion = quizTheme.questions[currentQuestionIndex];

    useEffect(() => {
        setTimeout(() => {
            setScreenState(ScreenStates.QUIZ);
        }, 1000);
    }, []);

    function handleSubmit(alternativeIndex: number) {
        setResult([
            ...result,
            alternativeIndex
        ])

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setCharacter(new Character("", "", "", []));
            setScreenState(ScreenStates.RESULT);
        }
    }

    return (
        <Widget>
            <CardComponent header={quizTheme.title}>
                {screenState == ScreenStates.QUIZ && <Quiz imageUri={quizTheme.imageUri} question={currentQuestion} onSubmit={handleSubmit}/>}
                {screenState == ScreenStates.LOADING && <Loading />}
                {screenState == ScreenStates.RESULT && <Result character={character} />}
            </CardComponent>
        </Widget>
    );
}

const Quiz = ({ imageUri, question, onSubmit }: QuizProps) => {
    return <>
        <CardComponent.Image uri={imageUri} />
        <QuizComponent question={question} onSubmit={onSubmit} />
    </>
}

type QuizScreenProps = {
    quizTheme: QuizTheme
}

interface QuizProps extends QuizComponentProps {
    imageUri: string;
}