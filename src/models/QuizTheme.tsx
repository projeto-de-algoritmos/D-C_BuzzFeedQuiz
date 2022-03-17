import Question from './Question';

export default class QuizTheme {
    title: string;
    description: string;
    backgroundUri: string;
    questions: Question[]

    constructor(title: string, description: string, backgroundUri: string, questions: Question[]) {
        this.title = title;
        this.description = description;
        this.backgroundUri = backgroundUri;
        this.questions = questions;
    }

}