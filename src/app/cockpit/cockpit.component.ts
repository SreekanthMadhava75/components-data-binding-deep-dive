import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
  @Output() bluePrintCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
//  serverElements = [];
  newServerName = '';
  newServerContent = '';

  constructor(){}
  ngOnInit() {
    
  }



  onAddServer() {
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({
      severNamne: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

  onAddBlueprint() {
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.bluePrintCreated.emit({
      severNamne: this.newServerName, 
      serverContent: this.newServerContent
    })
  }

}
