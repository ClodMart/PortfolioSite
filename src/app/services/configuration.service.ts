import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit, signal } from "@angular/core";
import { Observable, Subject, Subscription, take, throwError } from "rxjs";
import { ConfigFilePath} from "./applicationFileParameters";
import { CardTypes } from "../enums/card-types.enum";
import { CardItemTypes } from "../enums/card-item-types.enum";


export interface Card{
    TabName:string,
    Title?: string
    SubTitle?: string,
    Description?: string,
    Items?: CardItem[],
    Type: CardTypes,
    Technical?: boolean
}

export interface CardItem{
  Label: string,
  Description?: string,
  Color?: string,
  Level?: number,
  Url?: string,
  Image?: string,
  Type: CardItemTypes,
  SubItems?: CardItem[]
}

export interface appConfig{
  LinkedinUrl: string,
  Curriculum: string,
  AvatarImg: string,
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