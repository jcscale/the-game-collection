import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit, OnDestroy {
  gameRating = 0;
  gameId: string ='';
  game!: Game;
  routeSub: Subscription | undefined;
  gameSub: Subscription | undefined;
  indexZero: any[]= [];

  expand: boolean = false;
  anchor: string = 'Read more';

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    public loaderService: LoaderService
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      this.gameId = params['id'];
      this.getGameDetails(this.gameId);
    });
  }

  getGameDetails(id: string): void {
    console.log(id)
    this.gameSub = this.httpService
      .getGameDetails(id)
      .subscribe((gameResp: Game) => {
        this.game = gameResp;
        console.log(this.game.platforms)
        
        for(let i=0; i<this.game.screenshots.length; i++) {
            this.indexZero.push(this.game.screenshots[i])
            this.indexZero[i].num = `${i}`;
        }

        console.log(this.indexZero)

        setTimeout(() => {
          this.gameRating = this.game.metacritic;
        }, 1000);
      });
  }

  

  toggle() {
    this.expand = !this.expand;
    this.anchor = this.expand ? 'Show less' : 'Read more';
  }

  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
