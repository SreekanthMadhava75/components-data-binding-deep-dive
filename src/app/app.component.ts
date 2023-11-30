import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'components-data-binding-deep-dive';
  serverElements = [{type: 'server', name: 'Testserver', content: 'just a test'}]
  ngOnInit() {
    
  }

  constructor() {}


  onServerAdded(serverDaata: {severNamne: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverDaata.severNamne,
      content: serverDaata.serverContent
    });
  }

  onBlueprintAdded(bluePrintDaata: {severNamne: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintDaata.severNamne,
      content: bluePrintDaata.serverContent
    });
  }
}
