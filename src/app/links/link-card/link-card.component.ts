import { Component, Input } from "@angular/core";

@Component({
    selector: 'link-card',
    templateUrl: 'link-card.component.html',
    styleUrls: ['link-card.component.css']
})

export class linkcard {
    @Input()    img: string;
    @Input()    site: string;
    @Input()    link: string;
    @Input()    username: string;   

    constructor() {
        this.img = "";
        this.site = "Website";
        this.link = ""
        this.username = "username";
    }
}