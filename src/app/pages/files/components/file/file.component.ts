import { Component, Input, OnInit } from '@angular/core';
import { FilePreview } from 'src/app/@types/file.model';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
})
export class FileComponent implements OnInit {
  @Input() file: FilePreview;

  constructor() {}

  ngOnInit(): void {}
}
