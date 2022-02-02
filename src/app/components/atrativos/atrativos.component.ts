import { AtrativosService } from './../../services/atrativos.service';
import { Component, OnInit } from '@angular/core';
import { IAtrativos } from '../../model/IAtrativos.model';

@Component({
  selector: 'app-atrativos',
  templateUrl: './atrativos.component.html',
  styleUrls: ['./atrativos.component.scss'],
})
export class AtrativosComponent implements OnInit {
  listarAtrativos: IAtrativos[] = [];

  constructor(private atrativosService: AtrativosService) {}

  ngOnInit(): void {
    this.carregarAtrativos();
  }

  //TODO: TROCAR TUDO QUE FOR NECESSARIO PARA RETORNAR OS DADOS CORRETOS DA API DO SISTEMÃO
  //PRECISAMOS CONVERTER UM XML EM JSON EM TODAS OS RESPONSES DA API PARA A APLICAÇÃO WEB

  //Metodo para pegar os dados da api relacionados a atrativos (LOUMAR) ESTE METODO "consume" o metodo criado no arquivo services
  carregarAtrativos(): void {
    this.atrativosService.getAllAtrativos().subscribe((response) => {
      this.listarAtrativos = response;
    });
  }
}
