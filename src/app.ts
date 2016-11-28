import {
  Component,
  NgModule,
  Inject,
  Type,
  Provider,
} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ApplicationIdToken, WidgetToken} from './constants'

type ApplicationDescriptor = {
  selector: string,
  ngModule: Type<any>,
  providers?: Provider[],
  }

export const applicationFactory = function applicationFactory({
  selector,
  ngModule,
  providers,
  } : ApplicationDescriptor) {

  const localProviders : Provider[] = [
    { provide: ApplicationIdToken, useValue: selector}
  ]
  
  @Component({
    selector,
    template: `
        <header>It Works!</header>
        <widget></widget>
        <footer>created @{{createTS|date:mediumTime}}</footer>
    `,
    styles:[ 
      `
:host {
  border: 1px solid;
  background-color: cyan;
  margin: 5px;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction:column;
}
footer {
  font-size:xx-small;
  align-self: flex-end;
}
widget {
  display:block;
  margin: 5px;
  background-color: darkcyan;
  color: white;
  border: 1px solid darkblue;
  border-radius:4px;
  padding: 0.3em;
}
        `
        ]
  })
  class App {
    constructor(
      @Inject('timestamp') private createTS : Date,
      ) {}      
  }

  @NgModule({
    imports: [ BrowserModule, ngModule ],
    declarations: [ App ],
    bootstrap: [ App ],
    providers: [].concat(localProviders).concat(providers)
  })
  class AppModule {}

  return AppModule

}
