import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element: {type: String, name:String, content:String}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor() {}
  //


}
