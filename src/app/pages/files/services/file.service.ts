import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilePreview } from 'src/app/@types/file.model';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  files$ = new BehaviorSubject<FilePreview[]>([]);

  constructor() {}

  addFile(file: FilePreview) {
    this.files$.next([...this.files$.value, file]);
  }
}
