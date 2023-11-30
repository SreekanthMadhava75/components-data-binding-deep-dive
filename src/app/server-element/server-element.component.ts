
import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit{
  @Input('srvElement') element: {type: String, name:String, content:String}
  ngOnInit() {
    
  }

  constructor() {}
  //


}
