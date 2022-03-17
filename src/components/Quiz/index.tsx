import Question from '../../models/Question';
import { useState, useEffect } from 'react'
import CardComponent from '../Card';
import ButtonComponent from '../Button';
import { Container } from 'react-bootstrap';

export default function Quiz({ question, onSubmit }: QuizProps) {
    const [alternativeSelected, setAlternativeSelected] = useState(-1);

    function handleSubmit(index: number) {
        setAlternativeSelected(-1);
        onSubmit(index);
    }

    return (
        <Container>
            <CardComponent
                image={question.imageUri}
                title={question.title}
                text={question.description}>
                <div>
                    {question.alternatives.map((a, index) => <ButtonComponent variant={index === alternativeSelected ? "primary" : "secondary"} onClick={() => setAlternativeSelected(index)} text={a} />)}
                </div>
                <ButtonComponent onClick={() => handleSubmit(alternativeSelected)} disabled={alternativeSelected < 0} text="Confirmar" />
            </ CardComponent>
        </Container>
    )
}

type QuizProps = {
    question: Question,
    onSubmit: CallableFunction
}