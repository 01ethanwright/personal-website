import { Component, Input } from "@angular/core"

@Component({
    selector: 'project-card',
    templateUrl: 'project-card.component.html',
    styleUrls: ['project-card.component.css']
})

export class projectcard {
    @Input()    name:string;
    @Input()    url:string;
    @Input()    description:string;
    @Input()    languages:string;
    @Input()    pushed:string;
    @Input()    img:string;

    constructor() {
        this.name = "";
        this.url = "";
        this.description = "";
        this.languages = "";
        this.pushed = "";
        this.img="";
    }
}