import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { projectservice } from "./project-card/project-service";
import { projectmodel } from "./project-card/project.model";
import { waitForAsync } from "@angular/core/testing";

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['projects.component.css']
})

export class projects {
    repositories: projectmodel[] = [];
    fromGitHubApi: any[] = [];
    readmes: string[] = [];

    constructor(private projectservice: projectservice, private http: HttpClient) {

    }

    ngOnInit() {
        this.projectservice.getProjects().subscribe(data => {
            for (var project of data) {
                this.fromGitHubApi.push(project);

                this.projectservice.getReadMes(project.name).subscribe(readme => {
                    this.readmes.push(readme);
                })
            }

            this.addToRepoList(this.fromGitHubApi, this.readmes);
            
        })

    }
    
    addToRepoList(GitHubArray:any[], ReadMeArray:any[]) {
        console.log("Length of API: " + GitHubArray.length);
        
        for (var i = 0; i < GitHubArray.length; i++) {
            var name = GitHubArray[i].name;
            var url = GitHubArray[i].html_url;
            var description = GitHubArray[i].description;
            var language = GitHubArray[i].language;
            var pushed = GitHubArray[i].pushed_at;

            this.repositories.push(new projectmodel(name, url, description, language, pushed));
        }
    }
}