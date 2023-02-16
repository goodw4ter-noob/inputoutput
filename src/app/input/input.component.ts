import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../types';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() editedName = new EventEmitter<Student>();
  @Input() student!: Student;

  editName(nameInput: HTMLInputElement): void {
    this.editedName.emit({
      id: this.student.id,
      name: nameInput.value,
    });
    nameInput.value = '';
  }

}
