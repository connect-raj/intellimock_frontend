import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mock-interview',
  templateUrl: './mock-interview-page.component.html',
  styleUrls: ['./mock-interview-page.component.css']
})
export class MockInterviewPageComponent implements OnInit {
//   question: string = 'Describe the concept of closures in JavaScript?';
//   answer: string = 'A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.';
//   @ViewChild('video') videoElement!: ElementRef;
//   stream!: MediaStream;

//   constructor() {}

//   ngOnInit(): void {
//     this.startWebcam();
//   }

//   async startWebcam() {
//     try {
//       this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       this.videoElement.nativeElement.srcObject = this.stream;
//     } catch (error) {
//       console.error('Error accessing webcam:', error);
//     }
//   }
// }

// @Component({
//   selector: 'app-mock-interview',
//   templateUrl: './mock-interview.component.html',
//   styleUrls: ['./mock-interview.component.css']
// })
// export class MockInterviewComponent implements OnInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  videoStream!: MediaStream;

  question: string = 'What are the key features of Angular?';
  answer: string = 'Angular provides modular development, dependency injection, TypeScript support, and a powerful CLI tool.';

  ngOnInit(): void {
    this.startWebcam();
  }

  startWebcam(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoStream = stream;
        if (this.videoElement.nativeElement) {
          this.videoElement.nativeElement.srcObject = stream;
        }
      })
      .catch(error => {
        console.error('Error accessing webcam:', error);
      });
  }
} 