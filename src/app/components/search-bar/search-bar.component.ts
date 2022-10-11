import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.less']
})
export class SearchBarComponent implements OnInit {

  constructor(private router: Router, public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    this.router.navigate(['search', form.value.search])
  }

}
