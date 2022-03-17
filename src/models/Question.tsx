
export default class Question {
    title: string;
    description: string;
    imageUri: string;
    alternatives: string[];

    constructor(title: string, description: string, imageUri: string, alternatives: string[]) {
        this.title = title;
        this.description = description;
        this.imageUri = imageUri;
        this.alternatives = alternatives;
    }

};