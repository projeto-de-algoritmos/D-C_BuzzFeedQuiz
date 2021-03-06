import Character from './Character';
import Question from './Question';

export default class QuizTheme {
    title: string;
    description: string;
    backgroundUri: string;
    characters: Character[];
    imageUri: string;
    questions: Question[];

    constructor(title: string, description: string, backgroundUri: string, imageUri: string, questions: Question[], characters: Character[]) {
        this.title = title;
        this.description = description;
        this.backgroundUri = backgroundUri;
        this.imageUri = imageUri;
        this.questions = questions;
        this.characters = characters;
    }

}