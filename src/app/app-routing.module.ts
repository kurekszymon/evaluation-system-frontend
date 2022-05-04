import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvalSystemComponent } from './eval-system/eval-system.component';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  { path: '', component: ExampleComponent },
  { path: 'evaluation-system', component: EvalSystemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
