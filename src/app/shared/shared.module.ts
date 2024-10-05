import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  // Exportすることで、他のモジュールでもこのコンポーネントが使えるようになる。
  exports: [CardComponent],
})
export class SharedModule {}
