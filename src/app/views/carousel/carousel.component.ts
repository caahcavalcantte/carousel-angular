import { Component } from '@angular/core';
import { ImdbService } from 'src/app/services/imdb.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  public movies: any = [];

  constructor(private imdbService: ImdbService) { }

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void {
    this.imdbService.getData().subscribe((data) => {
      data.forEach((item) => {
        this.movies.push(item);

        while (this.movies.length > 10) {
          this.movies.pop();
        }
        return;
      });

      this.movies.forEach((movie: any) => {
        this.imdbService.getPoster(movie.id).subscribe((data)=> {
          movie.image=data.posters[0].link;
          this.imdbService.putPoster(movie.id,movie);
          return;
        });  
      });
    });
  }
}
