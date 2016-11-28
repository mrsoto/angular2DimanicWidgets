import {Component, NgModule} from '@angular/core'

import {ApplicationId} from './applicationid.component'

@Component({
  selector: 'widget',
  template: `
      <h4>Odd</h4>
      <p>From app: <application-id></application-id></p>
  `,
  styles: [ `h4 {  font-size:10px; } p {  font-size: 8px; }`]
  })
export class Odd  {}

@NgModule({
  exports: [Odd],
  declarations: [ Odd, ApplicationId ],
})
export class OddModule {}
