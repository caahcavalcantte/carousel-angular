import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { imdbFilmModel } from './imdb-film.model';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {
  private apikey: string = 'k_o37guv05';
  baseUrl: string = 'http://localhost:3000/items';
  baseUrlPoster: string = `https://imdb-api.com/en/API/Poster/${this.apikey}/`;

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<imdbFilmModel[]> {
    return this.httpClient.get<imdbFilmModel[]>(this.baseUrl);
  }

  //função recebe id do tipo string, e retorna um observable do tipo any (qualquer coisa)
  getPoster(id: string): Observable<any> {
    return this.httpClient.get<any>(this.baseUrlPoster + id);
  }

  putPoster(id: string, body: any){
    return this.httpClient
    .put(`${this.baseUrl}/${id}`,body)
    .subscribe((data) => {
      return
    });
  }
}
