import { Component, Input } from "@angular/core"

@Component({
    selector: 'project-card',
    templateUrl: 'project-card.component.html',
    styleUrls: ['project-card.component.css']
})

export class projectcard {
    @Input()    name: string;
    @Input()    description: string;
    @Input()    link: string;
    @Input()    type: string;

    constructor() {
        this.name = "";
        this.description = "";
        this.link = "";
        this.type = "";
    }
}