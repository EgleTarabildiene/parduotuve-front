import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {


  constructor (private authService:AuthService){

  }

public onRegister(f:NgForm){
this.authService.registerUser(f.form.value).subscribe({
  next:(data)=>{
    console.log(data);
    

  }
});

}


}
