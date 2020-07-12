import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DocumentosService } from '../../servicios/documentos.service';



@Component({
  selector: 'app-lista-documentos',
  templateUrl: './lista-documentos.component.html',
  styleUrls: ['./lista-documentos.component.scss']
})
export class ListaDocumentosComponent implements OnInit, OnDestroy {

  documentos: Observable<string[]>;
  actualDoc: string;
  private docSub: Subscription;

  constructor(private documentoService: DocumentosService) { }

  ngOnInit(): void {
    this.documentos = this.documentoService.docs
    this.docSub = this.documentoService.documentoActual.subscribe(doc => this.actualDoc =  doc.id)
  }

  ngOnDestroy(){
    this.docSub.unsubscribe();
  }

  leerDocumento(id: string){
    this.documentoService.leerDocumento(id);
  }

  nuevoDocumento(){
    this.documentoService.nuevoDocumento();
  }

}
