import { Component, OnInit, WritableSignal } from '@angular/core';
import { MyServiceService } from './../my-service.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent implements OnInit {

  player!: WritableSignal<{ name: string; club: string; } | null>
  constructor(private myServiceService: MyServiceService) {}

  ngOnInit(): void {
    this.player = this.myServiceService.selectedFootballer;
  }

}
