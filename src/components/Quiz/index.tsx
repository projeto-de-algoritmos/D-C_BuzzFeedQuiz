import Question from '../../models/Question';
import { useState, useEffect } from 'react'
import CardComponent from '../Card';
import ButtonComponent from '../Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Alternative from '../../models/Alternative';

export default function QuizComponent({ question, onSubmit }: QuizComponentProps) {
    const [questionAlternatives, setQuestionAlternatives] = useState<Alternative[]>(question.alternatives);

    function handleSubmit(questionAlternatives: Alternative[]) {
        onSubmit(questionAlternatives);
    }

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;

        const items = Array.from(questionAlternatives);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setQuestionAlternatives(items);
    }

    return (
        <CardComponent>
            <CardComponent.Title>{question.title}</CardComponent.Title>
            <CardComponent.Description>{question.description}</CardComponent.Description>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                    {(provided) => (
                        <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                            {questionAlternatives.map((alternative, index) => {
                                return (
                                    <Draggable key={alternative.text} draggableId={alternative.text} index={index}>
                                        {(provided) => (
                                            <li
                                                key={index}
                                                ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                {alternative.text}
                                            </li>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
            <ButtonComponent onClick={() => handleSubmit(questionAlternatives)} text="Confirmar" />
        </ CardComponent>
    )
}

export interface QuizComponentProps {
    question: Question;
    onSubmit: (index: Alternative[]) => void;
}