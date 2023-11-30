import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  @Output('ssCreated') serverCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
  @Output('bbCreated') bluePrintCreated = new EventEmitter<{severNamne: string, serverContent: string}>();
//  serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  @ViewChild ('serverContentInput') serverContentInput: ElementRef;

  constructor(){}
  ngOnInit() {
    
  }



  onAddServer(nameInout: HTMLInputElement) {
    console.log(nameInout.value)
    // view child
    console.log(this.serverContentInput)

   
    this.serverCreated.emit({
      severNamne: nameInout.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInout: HTMLInputElement) {
    console.log(this.serverContentInput)
    this.bluePrintCreated.emit({
      severNamne: nameInout.value, 
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

}
