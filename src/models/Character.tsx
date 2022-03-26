
export default class Character {
    name: string;
    description: string;
    imageUri: string;
    answers: number[];

    constructor(name: string, description: string, imageUri: string, answers: number[]) {
        this.name = name;
        this.description = description;
        this.imageUri = imageUri;
        this.answers = answers;
    }

};