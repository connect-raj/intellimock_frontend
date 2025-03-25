import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginSignal = signal<string>('');
  constructor(private route:ActivatedRoute){}

  ngOnInit() {
     this.route.data.subscribe(data => {
      this.loginSignal.set(data['formType'])
     });
  }
}
