import QuizTheme from '../../models/QuizTheme';
import { useState, useEffect, useRef } from 'react'
import { QuizComponent, QuizComponentProps } from '../../components/Quiz';
import Character from '../../models/Character';
import Loading from '../../components/Loading';
import Result from '../../components/Result';
import Alternative from '../../models/Alternative';
import Widget from '../../components/Widget';
import CardComponent from '../../components/Card';
import { useRouter } from 'next/router';

enum ScreenStates {
    QUIZ,
    LOADING,
    RESULT,
}

export default function QuizScreen({ quizTheme }: QuizScreenProps) {
    const [screenState, setScreenState] = useState<ScreenStates>(ScreenStates.LOADING);
    const [result, setResult] = useState<number[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = quizTheme.questions[currentQuestionIndex];
    const totalQuestions = quizTheme.questions.length;
    const isFirstRun = useRef(true);
    const router = useRouter();

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

        const nextQuestion = currentQuestionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestionIndex(nextQuestion);
        } else {
            setScreenState(ScreenStates.RESULT);
        }
    }, [result]);

    function handleSubmit(value: number) {
        setResult([...result, value]);
    }

    function handleQuizGoBack() {
        if (currentQuestionIndex <= 0) {
            router.push("/");
            return;
        }

        setScreenState(ScreenStates.LOADING);
        setResult(result => {
            result.pop();
            return result;
        });
        setTimeout(() => {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
            setScreenState(ScreenStates.QUIZ);
        }, 250);
    }

    function getGoBack() {
        switch (screenState) {
            case ScreenStates.QUIZ:
            case ScreenStates.RESULT:
                return handleQuizGoBack;
        }
    }

    return (
        <Widget>
            <CardComponent header={quizTheme.title} onGoBack={getGoBack()}>
                {screenState == ScreenStates.QUIZ && <Quiz imageUri={quizTheme.imageUri} question={currentQuestion} onSubmit={handleSubmit} />}
                {screenState == ScreenStates.LOADING && <Loading />}
                {screenState == ScreenStates.RESULT && <Result result={result} characters={quizTheme.characters} />}
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