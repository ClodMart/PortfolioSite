import { Injectable, OnDestroy, signal, WritableSignal } from '@angular/core';
import { appConfig, ConfigsService } from './configuration.service';
import { Observable, Subscription, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  public baseUrl: string;

  constructor(private configsService: ConfigsService, private httpClient: HttpClient) {  
    this.baseUrl = "./assets/mainPage/";  
   }

  download(fileName: string): Observable<Blob> {
    return this.httpClient.get(this.baseUrl + fileName, {
      responseType: 'blob'
    })
  }

}
