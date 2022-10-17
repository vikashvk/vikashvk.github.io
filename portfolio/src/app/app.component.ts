import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(
    private titleService: Title

  ){}
  ngOnInit(): void{
    

    this.titleService.setTitle( "Vikash VK | Full Stack Developer" );
    
    

  }
}
