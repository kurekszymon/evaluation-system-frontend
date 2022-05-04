import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { finalize, Subscription, tap } from 'rxjs';
import { EvalSystemService } from 'src/app/services/eval-system/eval-system.service';
import {
  BackendResponse,
  FileUploadResponse,
} from '../../interfaces/backend-response.interface';

@Component({
  selector: 'krk-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Input()
  public requiredFileType!: string;

  @Output()
  public uploadedFilePath = new EventEmitter<
    HttpResponse<BackendResponse<FileUploadResponse>>
  >();

  public fileName = '';

  public uploadProgress: number = 0;

  public uploadSub!: Subscription;

  constructor(private evalService: EvalSystemService) {}

  public onFileSelected($event: Event) {
    const file: File | undefined = ($event?.target as HTMLInputElement)
      .files?.[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('file', file);

      const upload$ = this.evalService.uploadFile(formData).pipe(
        tap((response) => {
          this.uploadedFilePath.emit(
            response as HttpResponse<BackendResponse<FileUploadResponse>>
          );

          return response;
        }),
        finalize(() => this.reset())
      );

      this.uploadSub = upload$.subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress && event.total) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      });
    }
  }

  public cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  private reset() {
    this.uploadProgress = 0;
    this.uploadSub?.unsubscribe();
  }
}
