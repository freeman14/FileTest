import { FilesListComponent } from './components/files-list/files-list.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FileUploadComponent,
  },
  {
    path: 'files',
    component: FilesListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilesRoutingModule {}
