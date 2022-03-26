import Question from '../../models/Question';
import { useState, useEffect } from 'react'
import CardComponent from '../Card';
import ButtonComponent from '../Button';
import { Stack } from 'react-bootstrap';
import Loading from '../Loading';
import Alternative from '../../models/Alternative';

export function QuizComponent({ question, onSubmit }: QuizComponentProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function handleAlternativeSelected(value: number) {
        if (isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            onSubmit(value);
        }, 250);
    }

    useEffect(() => {
        setIsLoading(false);
    }, [question]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <CardComponent.Title>{question.title}</CardComponent.Title>
            <CardComponent.Description>{question.description}</CardComponent.Description>

            <Stack gap={1}>
                {question.alternatives.map((alternative, index) => <ButtonComponent
                    key={index}
                    variant="secondary"
                    onClick={() => handleAlternativeSelected(alternative.value)}
                    text={alternative.text} />)}
            </Stack>
        </>
    )
}

export interface QuizComponentProps {
    question: Question;
    onSubmit: (value: number) => void;
}