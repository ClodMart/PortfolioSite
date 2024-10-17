import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit, signal } from "@angular/core";
import { Observable, Subject, Subscription, take, throwError } from "rxjs";
import { ConfigFilePath} from "./applicationFileParameters";
import { PersonalInfoTypes } from "../enums/personal-info-types.enum";


export interface Card{
    TabName:string,
    Title?: string
    SubTitle?: string,
    Description?: string,    
    URL?: string,
    Image?: string
    Items?: string[]
    Type: PersonalInfoTypes
}

export interface appConfig{
  Cards: Card[];
}

export type ResponseDataType = 'json'|'blob'|'text'|'arraybuffer'| undefined

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  constructor(private httpClient: HttpClient) { 

  }

  public GetAppConfig(): Observable<appConfig>{
    return this.httpClient.get<appConfig>(ConfigFilePath);
  }

  // public GetAppConfig(): Observable<IAppConfig>{
  //   return this.httpClient.get<IAppConfig>(systemConfigFilePath);
  // }
}