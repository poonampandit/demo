// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';
// import * as bcrypt from 'bcrypt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  error: string;

  constructor(private router: Router) {}

  async login() {
    const user = await User.findOne({ username: this.username });

    if (user && bcrypt.compareSync(this.password, user.password)) {
      // Login successful
      this.router.navigate(['/dashboard']);
    } else {
      // Login failed
      this.error = 'Invalid username or password';
    }
  }
}
