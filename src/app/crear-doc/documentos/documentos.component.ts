import { Component, OnInit, OnDestroy } from '@angular/core';
import { DocumentosService } from '../../servicios/documentos.service';
import { Documentos } from '../../modelos/documentos';
import { Subscription } from 'rxjs';
import { startWith} from 'rxjs/operators';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit, OnDestroy {

  documento: Documentos;
  private docSub: Subscription;
  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void {
    this.docSub = this.documentosService.documentoActual.pipe(
      startWith({id: '', doc: 'selecione un documento o cree uno nuevo'})
    ).subscribe(documento =>  this.documento = documento);
  }

  ngOnDestroy(){
    this.docSub.unsubscribe;
  }

  editarDocumento(){
    this.documentosService.editarDocumento(this.documento);
  }

}
