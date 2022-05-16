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
    projects: any[] = [];
    //readmes: string[] = [];

    constructor(private projectservice: projectservice, private http: HttpClient) {

    }

    ngOnInit() {
        this.projectservice.getProjects().subscribe(data => {
            for (var project of data) {
                console.log(project);
                this.projects.push(project);

                /*
                this.projectservice.getReadMes(project.name).subscribe(data => {
                    console.log("Fetching readme");
                    console.log(data);
                    this.readmes.push(data);
                })
                */
            }

            console.log(projects);
            //console.log(this.readmes);
        })
    }
}