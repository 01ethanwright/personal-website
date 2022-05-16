export class projectmodel {
    name: string;
    url: string;
    description: string;
    languages: string;
    pushed: string;


    constructor(name: string, url: string, description: string, languages: string, pushed: string) {
        this.name = name;
        this.url = url;
        this.description = description;
        this.languages = languages;
        this.pushed = pushed;
    }
}