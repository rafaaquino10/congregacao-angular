import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const gapi:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private auth2: any;
  public username: string="";
  public password: string="";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
}
