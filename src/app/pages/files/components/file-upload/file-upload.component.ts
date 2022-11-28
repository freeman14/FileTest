import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { FileService } from './../../services/file.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: '',
    allowedFileType: ['.txt'],
  });
  hasBaseDropZoneOver: boolean;

  constructor(private fileService: FileService) {}

  ngOnInit(): void {}

  fileOverBase(e: boolean): void {
    this.hasBaseDropZoneOver = e;
  }

  onFileDrop(files: File[]): void {
    const [file] = files;
    console.log(file);
    if (!this.isValidFile(file)) {
      alert('Only text/plain allowed');
      return;
    }

    this.uploadFile(file);
  }

  private isValidFile(file: File): boolean {
    return file.type === 'text/plain';
  }

  private uploadFile(file: File): void {
    this.fileService.addFile({
      filename: file.name,
      fileSize: `${file.size / 1024 / 1024} Mb`,
      uploadDate: new Date(),
    });
    alert('File uploaded');
  }
}
