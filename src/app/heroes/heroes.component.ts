import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
	 title = 'The First Modification';
   heroText = 'The First Modification';
	 hero = "Kyon hakdarfd ";


  constructor() { }

  ngOnInit() {
  }

}
