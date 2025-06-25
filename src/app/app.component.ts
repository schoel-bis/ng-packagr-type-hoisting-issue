import { Component, inject } from '@angular/core';
import { LibAService } from 'lib-a';

@Component({
    selector: 'app-root',
    imports: [],
    template: `
    <h1>Welcome to {{title}}!</h1>

    <dl>
      <dt>featA option 1</dt>
        <dd>{{ config.featA.featAOption1 }}</dd>
      <dt>featB option 1</dt>
        <dd>{{ config.featB.featBOption1 }}</dd>
    </dl>
  `,
    styles: []
})
export class AppComponent {
  title = 'type-hoisting-issue';

  protected readonly config = inject(LibAService).options;
}
