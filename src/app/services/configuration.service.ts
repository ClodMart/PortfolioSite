import { HttpClient } from "@angular/common/http";
import { Injectable, signal } from "@angular/core";
import { Observable, Subject, take, throwError } from "rxjs";
import { githubConfigFilePath } from "../applicationFileParameters";

export interface GithubProject{
  ProjectName:string,
    URL: string,
    PreviewImage: string,
    Description: string
}

export interface GithubConfig{
  Projects: GithubProject[];
}

export type ResponseDataType = 'json'|'blob'|'text'|'arraybuffer'| undefined

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private _gitData: GithubConfig = {Projects: []};
  public GitData = signal(this._gitData);

  constructor(private httpClient: HttpClient) { 
    this.GetApiConfig().pipe(take(1)).subscribe(GitConf=>this.GitData.set(GitConf));
  }

  public GetApiConfig(): Observable<GithubConfig>{
    return this.httpClient.get<GithubConfig>(githubConfigFilePath);
  }

  // public GetAppConfig(): Observable<IAppConfig>{
  //   return this.httpClient.get<IAppConfig>(systemConfigFilePath);
  // }
}