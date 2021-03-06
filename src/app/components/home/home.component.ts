import { Component, OnInit } from '@angular/core';
import { IAtrativos } from 'src/app/model/IAtrativos.model';
import { AtrativosService } from 'src/app/services/atrativos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  listarAtrativos: IAtrativos[] = [];

  constructor(private atrativosService: AtrativosService) {}

  ngOnInit(): void {
    this.carregarAtrativos();
  }

  //Metodo para pegar os dados da api relacionados a atrativos (LOUMAR) ESTE METODO "consume" o metodo criado no arquivo services
  carregarAtrativos(): void {
    this.atrativosService.getAllAtrativos().subscribe((response) => {
      this.listarAtrativos = response;
      console.log('<- TO POR AQUI ->', this.listarAtrativos);
    });
  }
}
