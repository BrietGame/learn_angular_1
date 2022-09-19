import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";
import {UserServiceService} from "../user-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ts-ignore
  user: string;
  date: string = "2022-10-10";
  number: number = 1;
  // @ts-ignore
  form: FormGroup;
  newUser: User = new User(0, '', '');
  constructor(private fb: FormBuilder, private userS: UserServiceService) { }

  ngOnInit(): void {
    let dataApi = this.userS.getExample();
    console.log(dataApi.then())
    this.user = "Alexis";
    this.createForm();
    let user = new User(1, 'alexis', 'test');
  }

  createForm() {
    this.form = this.fb.group({
      login: ['', Validators.required], // Valeur par défaut ['vide']
      password: ['']
    });
  }

  submitForm() {
    console.log(this.form.get('login')?.value);
  }

  changeName() {
    if (this.user == "Alexis") {
      this.user = "Théo"
    } else {
      this.user = "Alexis"
    }
  }

}
