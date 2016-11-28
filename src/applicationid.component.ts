import {
  Component,
  NgModule,
  Inject
} from '@angular/core'

import {ApplicationIdToken} from './constants'

@Component({
  selector: 'application-id',
  template: `<span>{{applicationId}}<span>`,
  styles: [ `
span {
  font-family: monospace;
}
`
        ]
  })
export class ApplicationId  {
  constructor(
    @Inject(ApplicationIdToken) private applicationId : string
    ) {}
}
