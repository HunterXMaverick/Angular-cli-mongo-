import { Documentos } from '../modelos/documentos';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { SocketJwtService } from './socket-jwt.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  contador = 0;
  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket: SocketJwtService) { }

  leerDocumento(id: string) {
    this.socket.emit('getDoc', id);
  }

  nuevoDocumento() {
    console.log(this.socket);
    if(this.socket.ioSocket.connected){
      this.socket.emit('addDoc', { id: '', doc: '', psw: '1234' });      
    }else{
      alert('sin coneccion de token,  invalido')
    }
  }

  editarDocumento(doc: Documentos) {
    this.socket.emit('editDoc', doc);
  }

  private docId() {
    this.contador++;
    const text = `documento ${this.contador}`;
    return text;

  }
}
