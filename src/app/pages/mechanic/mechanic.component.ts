import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Mechanic from 'src/app/models/mechanic.models';

@Component({
  selector: 'app-mechanic',
  templateUrl: './mechanic.component.html',
  styleUrls: ['./mechanic.component.css']
})
export class MechanicComponent implements OnInit {

  mechanic: Mechanic = new Mechanic();

  constructor() { }

  ngOnInit(): void {
  }

  save(mechanicForm: NgForm) {
    if (mechanicForm.invalid) {
      Object.values(mechanicForm.controls)
        .forEach(control => {
          control.markAsTouched();
        });
      return;
    }
  }

}
