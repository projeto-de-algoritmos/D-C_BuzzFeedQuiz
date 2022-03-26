import type { NextPage } from 'next'
import QuizScreen from '../../src/screens/Quiz';
import db from '../../assets/db.json';
import QuizTheme from '../../src/models/QuizTheme';
import Question from '../../src/models/Question';
import Background from '../../src/components/Background';

const Quiz: NextPage = ({ quiz }: any) => {
    const quizTheme = new QuizTheme(
        quiz.title,
        quiz.description,
        quiz.bg,
        quiz.questions.map((question: any) => new Question(question.title, question.description, question.image, question.alternatives))
    );

    return (
        <Background backgroundUri={quizTheme.backgroundUri}>
            <QuizScreen quizTheme={quizTheme} />
        </Background>
    )
}

export default Quiz;

export function getServerSideProps(context: any) {
    const id = context.query.id;
    const quiz = db.find(quiz => quiz.id === id);

    if (!quiz) {
        throw new Error(`Tema '${id}' não encontrado`);
    }

    return {
        props: {
            quiz: quiz
        }
    }
}