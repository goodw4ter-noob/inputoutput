import { Component } from '@angular/core';
import { STUDENTS } from './mock-students';
import { Student } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  students: Student[] = STUDENTS;

  changeName(newStudent: Student): void {
    console.log(newStudent);
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id === newStudent.id) {
        this.students[i].name = newStudent.name;
        break;
      }
    };
  }
}
