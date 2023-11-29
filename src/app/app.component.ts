import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'components-data-binding-deep-dive';
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a test'}]
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}
}
