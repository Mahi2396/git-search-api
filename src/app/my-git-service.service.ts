import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class MyGitServiceService {
    girPublicURL = `https://api.github.com/users/`;
    gitPulicSearchURL = `https://api.github.com/search/users?q=`
    constructor(private http: Http) {

    }
    


    getUserSearch(usernameObject) {
        return this.http.get(this.gitPulicSearchURL+usernameObject)
            .map((res: Response) => res.json());
    }


    getUser(usernameObject) {
        return this.http.get(this.girPublicURL + usernameObject)
            .map((res: Response) => res.json());
    }
    getGitRepoList(usernameObject) {
        return this.http.get(this.girPublicURL + usernameObject + `/repos`)
            .map((repoListRes: Response) => repoListRes.json());
    }

    getGitCommitList(object) {
        return this.http.get(`https://api.github.com/repos/` + object.username + `/` + object.fileName + `/commits`)
            .map((repoCommitRes: Response) => repoCommitRes.json());
    }
}
