import Character from './Character';
import Question from './Question';

export default class QuizTheme {
    title: string;
    description: string;
    backgroundUri: string;
    questions: Question[];
    characters: Character[];

    constructor(title: string, description: string, backgroundUri: string, questions: Question[], characters: Character[]) {
        this.title = title;
        this.description = description;
        this.backgroundUri = backgroundUri;
        this.questions = questions;
        this.characters = characters;
    }

}