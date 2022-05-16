import { Component, Input } from "@angular/core";

@Component({
    selector: 'social-card',
    templateUrl: 'social-card.component.html',
    styleUrls: ['social-card.component.css']
})

export class socialcard {
    @Input()    img: string;
    @Input()    site: string;
    @Input()    link: string;
    @Input()    at: string;   

    constructor() {
        this.img = "";
        this.site = "Website";
        this.link = "www.google.com"
        this.at = "At";
    }
}