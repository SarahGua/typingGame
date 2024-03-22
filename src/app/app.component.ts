import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {lorem} from 'faker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  enteredText = ''
  randomText = lorem.sentence()

  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter){
      return 'pending'
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect'

  }

  onChangeInputText(event: Event){
    const target = event.target as HTMLInputElement
    const text = target.value
    console.log(text)
    this.enteredText = text
    console.log(this.enteredText)
  }

}
