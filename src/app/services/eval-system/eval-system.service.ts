import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  processFileUrl,
  uploadFileUrl,
} from 'src/app/shared/configs/eval-system/endpoints';

import { Reference } from 'src/app/shared/interfaces/backend-response.interface';

@Injectable({
  providedIn: 'root',
})
export class EvalSystemService {
  constructor(private http: HttpClient) {}

  public extractReferencesFromFile(file_path: string): Observable<Reference[]> {
    return this.http.post(processFileUrl, { file_path }).pipe(
      map((x: any): Reference[] => {
        return x.data.references;
      })
    );
  }

  public uploadFile(formData: FormData, url = uploadFileUrl) {
    return this.http.post(url, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
