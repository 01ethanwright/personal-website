import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { projectservice } from "./project-card/project-service";
import { projectmodel } from "./project-card/project.model";

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css']
})

export class projects {
    projects: projectmodel[] = [];

    constructor(private projectservice: projectservice, private http: HttpClient) {

    }

    ngOnInit() {
        this.projectservice.getProjects().subscribe(data => {
            for (var project of data) {
                console.log(project);
                this.projects.push(project);
            }
        })
    }
}