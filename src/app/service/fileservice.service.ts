import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileserviceService {

  constructor() { }

  get_base64_file(base64data :any, filename :string){
    const binaryString = window.atob(base64data);
    const bytes = new Uint8Array(binaryString.length);
    const binaryArray = bytes.map((byte, i) => binaryString.charCodeAt(i));
    const blob = new Blob([new Uint8Array(binaryArray)], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
  
  }

}
