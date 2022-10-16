import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort:string = '';
  public games: Array<Game>=[];
  private routeSub: Subscription | undefined;
  private gameSub: Subscription | undefined;
  public paginate:any;

  p: number = 1;
  total: number = 0;

  constructor(
    private httpService: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params:Params) => {
      if(params['game-search']) {
        this.searchGames('metacrit', this.p, params['game-search']);
      } else {
        this.searchGames('metacrit', this.p)
      }
    });
  }

  searchGames(sort: string, page?: any, search?: string) {
    this.gameSub = this.httpService
      .getGameList(sort, page, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList)
        this.total = gameList.count / 36
        this.paginate = gameList.next
      })
  }

  openGameDetails(id:string): void {
    console.log(id)
    this.router.navigate(['details', id]);
  }

  pageChangeEvent(event: number){
    console.log(event)
    this.p = event;
    this.routeSub = this.activatedRoute.params.subscribe((params:Params) => {
      if(params['game-search']) {
        this.searchGames('metacrit', this.p, params['game-search']);
      } else {
        this.searchGames('metacrit', this.p)
      }
    });
  }

  // dosomething() {
  //   console.log(123)
  // }

  ngOnDestroy(): void {
    if(this.gameSub) {
      this.gameSub.unsubscribe();
    }

    if(this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
