import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { HeaderComponent } from '../header/header.component';
import { FeatureComponent } from './feature/feature.component';
import { DemoAiComponent } from './demo-ai/demo-ai.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, HeaderComponent, FeatureComponent, DemoAiComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
