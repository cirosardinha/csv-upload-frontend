import { CurrencyPipe } from '@angular/common';
import { UploadService } from './../../services/upload.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
})
export class UploadComponent {
  selectedFile: File | null = null;
  uploadedData: any = [];

  constructor(
    private uploadService: UploadService,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    event?.preventDefault();

    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile).subscribe(
        (response: any) => {
          this.uploadedData = response.data;
          this.selectedFile = null;
          this.toastr.success('Arquivo enviado com sucesso!');
        },
        (error: any) => {
          console.error(error);
          this.toastr.error('Erro ao enviar arquivo.');
        }
      );
    }
  }

  onFileSelected($event: Event) {
    this.selectedFile = ($event.target as HTMLInputElement).files![0];
  }
}
