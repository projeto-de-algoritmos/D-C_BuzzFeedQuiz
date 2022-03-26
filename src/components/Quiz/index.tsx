import Question from '../../models/Question';
import { useState, useEffect } from 'react'
import CardComponent from '../Card';
import ButtonComponent from '../Button';
import { Stack } from 'react-bootstrap';
import Loading from '../Loading';

export function QuizComponent({ question, onSubmit }: QuizComponentProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    function handleAlternativeSelected(index: number) {
        if(isLoading) return;
        setIsLoading(true);
        setTimeout(() => {
            onSubmit(index);
        }, 500);
    }

    useEffect(() => {
        setIsLoading(false);
    }, [question]);

    if(isLoading){
        return <Loading/>
    }

    return (
        <>
            <CardComponent.Title>{question.title}</CardComponent.Title>
            <CardComponent.Description>{question.description}</CardComponent.Description>

            <Stack gap={1}>
                {question.alternatives.map((questionText, index) => <ButtonComponent
                    key={index}
                    variant="secondary" 
                    onClick={() => handleAlternativeSelected(index)}
                    text={questionText} />)}
            </Stack>
        </>
    )
}

export interface QuizComponentProps {
    question: Question;
    onSubmit: (index: number) => void;
}