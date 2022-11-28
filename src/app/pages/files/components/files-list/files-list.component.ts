import { FileService } from '../../services/file.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss'],
})
export class FilesListComponent implements OnInit {
  constructor(public fileService: FileService) {}

  ngOnInit(): void {}
}
