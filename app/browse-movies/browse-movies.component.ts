import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {
  ImageWidth = 210;
  ImageHeight = 315;
  filtereddetails: any = []; 
  showbox: boolean = false;
  cshowLogin  = false;
  cshowLogout  = true;
  cshowSignup  = false;
  message = 'zzzzzzzzzzzzzzz';
  sampledetails=[
    {name:'Star Wars: A New Hope', images:'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg'},
    {name:'Star Wars: Empire Strikes Back', images: 'https://upload.wikimedia.org/wikipedia/en/3/3c/SW_-_Empire_Strikes_Back.jpg'},
    {name:'Star Wars: Return of The Jedi', images:'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg'},
    {name:'Star Wars: Phantom Menace', images:'https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg'},
    {name:'Star Wars: Attack of Clones', images:'https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg'},
    {name:'Star Wars: Revenge of Sith', images:'https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg'},
    {name:'Star Wars: Force Awakens', images:'https://upload.wikimedia.org/wikipedia/en/a/a2/Star_Wars_The_Force_Awakens_Theatrical_Poster.jpg'},
    {name:'Star Wars: The Last Jedi', images:'https://upload.wikimedia.org/wikipedia/en/7/7f/Star_Wars_The_Last_Jedi.jpg'}
  ]
  constructor() {}

  ngOnInit() {
  }
  search(searchtext){
    this.showbox=false;
    searchtext = searchtext.toLowerCase();
    this.filtereddetails = this.sampledetails.filter((filtereddetails: any) => 
      filtereddetails.name.toLocaleLowerCase().indexOf(searchtext)!==-1);
    if(this.filtereddetails !== null){
      this.showbox=true;
    }
  }
}
