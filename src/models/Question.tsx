import Alternative from "./Alternative";

export default class Question {
    title: string;
    description: string;
    imageUri: string;
    alternatives: Alternative[];

    constructor(title: string, description: string, imageUri: string, alternatives: Alternative[]) {
        this.title = title;
        this.description = description;
        this.imageUri = imageUri;
        this.alternatives = alternatives;
    }

};