import { Documentos } from '../modelos/documentos';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  contador = 0;
  documentoActual = this.socket.fromEvent<Documentos>('gestionDato');
  docs = this.socket.fromEvent<string[]>('gestionDatos');

  constructor(private socket: Socket) { }

  leerDocumento(id: string) {
    this.socket.emit('getDoc', id);
  }

  nuevoDocumento() {
    this.socket.emit('addDoc', { id: this.docId(), doc: '' });
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
