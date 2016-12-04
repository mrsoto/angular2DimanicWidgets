//main entry point
import {Provider} from '@angular/core'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

import {ApplicationIdToken, WidgetToken} from './constants'
import {applicationFactory} from './app'
import {EvenModule} from './even.component'
import {OddModule} from './odd.component'

const body = document.body
const widgets = [EvenModule, OddModule]
for ( let i=1; i<10; i++) {
  
  const selector = `my-app-${i}`
  const textnode = document.createTextNode('loading...')
  const placeHolder = document.createElement(selector)
  placeHolder.appendChild(textnode)
  body.appendChild(placeHolder)
  

  const ngModule = widgets[i % widgets.length]
  const providers : Provider[] = [
    { provide: 'timestamp', useValue: new Date()},
    { provide: WidgetToken, useClass: ngModule}
    ]
  const AppModule = applicationFactory({selector, ngModule})
  platformBrowserDynamic(providers).bootstrapModule(AppModule)
}

