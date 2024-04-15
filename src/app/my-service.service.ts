import { Injectable, signal, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  footballers = signal([
    { name: "Messi", club: "Barcelona" },
    { name: "Ronaldo", club: "Juventus" },
    { name: "Neymar", club: "PSG" },
  ]);

  selectedFootballer = signal<{ name: string, club: string } | null>(null)

  getPlayers() {
    return this.footballers();
  }

  selectPlayer(index: number): void {
    this.selectedFootballer.set(this.footballers()[index]);
  }


}
