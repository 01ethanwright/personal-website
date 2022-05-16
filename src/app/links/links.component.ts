import { Component, OnInit } from "@angular/core";
import { linkmodels } from "./link-card/link.model";
import { link_list } from "./link-card/link-list";

@Component({
    selector: 'links',
    templateUrl: 'links.component.html',
    styleUrls: ['links.component.css']
})

export class links {
    links: linkmodels[] = [];

    constructor () {
        for (var link of link_list) {
            this.links.push(link);
        }
    }
}