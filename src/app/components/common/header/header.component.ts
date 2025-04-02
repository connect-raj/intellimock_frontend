import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  hidden = false;

  constructor(private route: ActivatedRoute) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  isLogin = signal(true);

  ngOnInit() {
    this.route.data.subscribe((data) => {
      if (data['formType']) {
        this.hidden = true;
      }
    });
  }
}
