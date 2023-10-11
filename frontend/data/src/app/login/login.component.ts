import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  values:any;
  error:any;
  successMessage:any;
  constructor(private http:HttpClient,private router:Router){}
  submit(value:any)
  {
this.values=value
this.http.post("http://localhost:3000/login",{username:this.values.username,password:this.values.password})
.subscribe((resultdata:any)=>{
  if(resultdata.status)
  {
    console.log(this.values.username)
    console.log(this.values.password)
  
    this.successMessage = resultdata.message;
    setTimeout(()=>{
      this.router.navigateByUrl('/home')
    },2000)
  }
else{
  this.error="wrong........!!!!"
}
})



  
  }

}
