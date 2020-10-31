import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {

  constructor(private http: HttpClient) {
    this.getDocumentTypes();
  }

  getDocumentTypes() {
    return this.http.get(`${environment.apiUrl}document-type`);
  }
}
