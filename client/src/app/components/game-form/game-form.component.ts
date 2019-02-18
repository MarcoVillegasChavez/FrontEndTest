import { Component, OnInit, HostBinding } from '@angular/core';
import { Game } from '../../models/game';
import { GamesService } from '../../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row'

  game: Game = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  edit : boolean=false;
  
  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gamesService.getGame(params.id).subscribe(
        res=>{
          this.game = res;
          this.edit = true;
          console.log(res);
        },
        err=> {
          console.log(err);
        }
      )
    }

    console.log(params);    
  }
  updateGame(){
    delete this.game.created_at;
    this.gamesService.updateGame(this.game.id, this.game).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => {
        return console.log(err);
      }
      );
    
  }


  saveNewGame() {
    delete this.game.created_at;
    delete this.game.id;
    this.gamesService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => {
        return console.log(err);
      }
    );
  }

}
