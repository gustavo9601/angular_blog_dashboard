import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-widget-upload-thumbnail',
  templateUrl: './widget-upload-thumbnail.component.html',
  styleUrls: ['./widget-upload-thumbnail.component.css']
})
export class WidgetUploadThumbnailComponent implements OnInit {


  public img: any;
  public loading: boolean;
  @Output() senPathFile: EventEmitter<string>;

  constructor(private afs: AngularFireStorage) {
    this.img = '';
    this.loading = false;
    this.senPathFile = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  uploadFile($event) {
    console.log('uploadFile #event', $event);
    this.loading = true;

    const id = new Date().getTime().toString();
    const file = $event.target.files[0];
    const path = 'thumbnails/' + id;
    // Crea el path de no existir
    const ref = this.afs.ref(path);

    let self = this;
    // Seteando el valor de this en self, para que funcione dentro de la promesa y observable
    this.afs.upload(path, file).then(
      (result) => {
        ref.getDownloadURL().subscribe(url => {
          self.img = url;
          self.senPathFile.emit(self.img);
          this.loading = false;
        }, (error) => {
          console.log('Error al obtener el path de la imagen', error);
          this.loading = false;
        });
      }, (error) => {
        console.log('Error al subir la imagen', error);
        this.loading = false;
      }
    );

  }
}
