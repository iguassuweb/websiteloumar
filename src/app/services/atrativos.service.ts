import { IAtrativos } from './../model/IAtrativos.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AtrativosService {
  private URL_ATRATIVOS: string =
    'http://sistema.loumarturismo.com.br/gestorsites/Api/Atrativo/GetListaAtrativosSite';

  constructor(private http: HttpClient) {}

/**
 *
 * TODO: REFINAR ESTE METODO PARA PEGAR O XML E TRANSFORMAR EM UM JSON
 *
 * O QUE ELE FAZ?
  recebe a interface do tipo atrativos criado no arquivo ts e esta é como um ARRAY
 */
  getAllAtrativos(): Observable<IAtrativos[]> {

    return this.http.get<IAtrativos[]>(this.URL_ATRATIVOS);
  }
}
