import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output('ssCreated') serverCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
  @Output('bbCreated') bluePrintCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
//  serverElements = [];
  newServerName = '';
  newServerContent = '';

  constructor(){}
  ngOnInit() {
    
  }



  onAddServer(nameInout: HTMLInputElement) {
    console.log(nameInout.value)
    //local ref ---> nameInout: HTMLInputElement
   
    this.serverCreated.emit({
      severNamne: nameInout.value, 
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
