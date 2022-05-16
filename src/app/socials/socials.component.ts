import { Component, OnInit } from "@angular/core";
import { socialsmodels } from "./social-card/socials.model";
import { socials_list } from "./social-card/socials-list";

@Component({
    selector: 'socials',
    templateUrl: 'socials.component.html',
    styleUrls: ['socials.component.css']
})

export class socials {
    socials: socialsmodels[] = [];

    constructor () {
        for (var social of socials_list) {
            this.socials.push(social);
        }
    }
}