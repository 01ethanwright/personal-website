export class projectmodel {
    name: string;
    description: string;
    link: string;
    type: string;

    constructor(name: string, description: string, link: string, type: string) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.type = type;
    }
}