import Alternative from "./Alternative";

export default class Question {
    title: string;
    description: string;
    alternatives: Alternative[];

    constructor(title: string, description: string, alternatives: Alternative[]) {
        this.title = title;
        this.description = description
        this.alternatives = alternatives;
    }

};