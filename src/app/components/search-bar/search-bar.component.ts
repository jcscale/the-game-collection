import { Component, Host, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { HostListener } from '@angular/core';


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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}




