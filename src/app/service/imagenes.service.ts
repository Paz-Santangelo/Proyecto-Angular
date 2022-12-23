import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagenes/${name}/${file.name}`);
    console.log(imgRef);
    uploadBytes(imgRef, file).then(response => {this.getImages(file, name)})
    .catch(error => console.log(error));

  }

  getImages(file: any, name: string){
    const imagesRef = ref(this.storage, `imagenes/${name}/`);
    list(imagesRef).then(
      async response => {
        for(let item of response.items) {
          if(file.name == item.name) {
            this.url = await getDownloadURL(item);
          }
        }
      }).catch(error => console.log(error));
  }

}
