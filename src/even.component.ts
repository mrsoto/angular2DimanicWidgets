import {
  Component,
  NgModule
} from '@angular/core'

import {ApplicationId} from './applicationid.component'

@Component({
  selector: 'widget',
  template: `
      <h4>Even</h4>
      <p>From app: <application-id></application-id></p>
  `,
  styles: [ `h4 { font-size:10px; text-align:right; } p { font-size: 8px; }`]
  })
export class Even  {}

@NgModule({
  exports: [Even],
  declarations: [Even, ApplicationId],
})
export class EvenModule {}
