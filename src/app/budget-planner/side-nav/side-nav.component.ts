import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  isSlideOut = true;
  constructor(private _router: Router){}

  toggleSlideOut(): void {
    this.isSlideOut = !this.isSlideOut;
  }
  onDash(){
    this._router.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this._router.navigate(['/budget-planner/profile']);
  }
  onHistory(){
    this._router.navigate(['/budget-planner/history']);
  }
  onLogout(){
    this._router.navigate(['/budget-planner/login']);
  }
}
