import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { projectmodel } from "./project.model";

@Injectable({
    providedIn: 'root'
})

export class projectservice {

    private baseUrl:string = "https://api.github.com/users/01ethanwright/repos";

    constructor (private http: HttpClient) {

    }

    getProjects() {
        return this.http.get<projectmodel[]>(this.baseUrl);
    }

}