import { MyServiceService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit {

  players!: {name: string, club: string}[];
  constructor(private myServiceService: MyServiceService) {}

  ngOnInit(): void {
    this.players = this.myServiceService.getPlayers()
  }

  onChoicePlayer(index: number) {
    this.myServiceService.selectPlayer(index);
  }
  

}
