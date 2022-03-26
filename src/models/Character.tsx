
export default class Character {
    name: string;
    description: string;
    imageUri: string;
    answer: number[];

    constructor(title: string, description: string, imageUri: string, answer: number[]) {
        this.name = title;
        this.description = description;
        this.imageUri = imageUri;
        this.answer = answer;
    }

};