import { HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EvalSystemService } from '../services/eval-system/eval-system.service';
import {
  BackendResponse,
  FileUploadResponse,
  Reference,
} from '../shared/interfaces/backend-response.interface';
@Component({
  selector: 'krk-eval-system',
  templateUrl: './eval-system.component.html',
  styleUrls: ['./eval-system.component.scss'],
})
export class EvalSystemComponent implements OnInit {
  constructor(private evalService: EvalSystemService) {}

  ngOnInit(): void {}

  public panelOpenState = false;
  public references$!: Observable<Reference[]>;

  public filePath!: string;

  public resetReferences() {
    this.references$ = of([]);
  }

  public onUploadedFilePath(
    $event: HttpResponse<BackendResponse<FileUploadResponse>>
  ) {
    const { body, status } = $event;

    if (status === HttpStatusCode.Ok && body?.data.file_path) {
      this.filePath = body?.data?.file_path;
    }
  }

  public processFile(filePath: string) {
    this.references$ = this.evalService.extractReferencesFromFile(filePath);
  }
}
