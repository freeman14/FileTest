import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { FilesListComponent } from './components/files-list/files-list.component';
import { FilesRoutingModule } from './files-routing.module';
import { FileService } from './services/file.service';
import { FileComponent } from './components/file/file.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [FilesListComponent, FileUploadComponent, FileComponent],
  imports: [CommonModule, FilesRoutingModule, FileUploadModule],
  providers: [FileService],
})
export class FilesModule {}
