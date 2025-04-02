import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';

@Component({
  selector: 'app-questions',
  imports: [HeaderComponent,CommonModule],
  templateUrl: './question-component.component.html',
  styleUrls: ['./question-component.component.css']
})
export class QuestionsComponent {
  selectedLanguage: string = 'JavaScript'; // Default language

  questions: any = {
    JavaScript: {
      mock: [
        { question: "What is closure in JavaScript?", answer: "A closure is a function that retains access to its parent scope, even after the parent function has closed." },
        { question: "Explain event delegation.", answer: "Event delegation allows handling events efficiently by using a single event listener on a parent element." }
      ],
      coding: [
        { question: "Write a function to reverse a string.", answer: "function reverseString(str) { return str.split('').reverse().join(''); }" },
        { question: "Find the largest number in an array.", answer: "Math.max(...arr);" }
      ]
    },
    Python: {
      mock: [
        { question: "What are Python decorators?", answer: "Decorators are functions that modify the behavior of another function without modifying its structure." },
        { question: "What is the difference between `is` and `==`?", answer: "`is` checks for object identity, while `==` checks for value equality." }
      ],
      coding: [
        { question: "Reverse a list in Python.", answer: "`list[::-1]` or `reversed(list)`" },
        { question: "Find the factorial of a number.", answer: "`math.factorial(n)` or a recursive function." }
      ]
    },
    Java: {
      mock: [
        { question: "What is JVM?", answer: "JVM (Java Virtual Machine) is an engine that provides a runtime environment to execute Java bytecode." },
        { question: "Explain the difference between `final`, `finally`, and `finalize`.", answer: "`final` is a keyword, `finally` is a block, and `finalize` is a method." }
      ],
      coding: [
        { question: "Check if a number is prime in Java.", answer: "Use a loop up to √n and check divisibility." },
        { question: "Find the Fibonacci series in Java.", answer: "Use recursion or iteration to compute Fibonacci numbers." }
      ]
    }
  };

  changeLanguage(lang: string) {
    this.selectedLanguage = lang;
  }
}
