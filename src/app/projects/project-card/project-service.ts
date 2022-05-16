import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { projectmodel } from "./project.model";

@Injectable({
    providedIn: 'root'
})

export class projectservice {

    private reposUrl:string = "https://api.github.com/users/01ethanwright/repos";
    //private readmesUrl:string = "https://raw.githubusercontent.com/01ethanwright/";

    constructor (private http: HttpClient) {

    }

    getProjects() {
        return this.http.get<any[]>(this.reposUrl);
    }

    /*
    getReadMes(repoName: string) {
        console.log(this.readmesUrl + repoName + "/master/README.md");
        return this.http.get<string>(this.readmesUrl + repoName + "/master/README.md");
    }
    */

}