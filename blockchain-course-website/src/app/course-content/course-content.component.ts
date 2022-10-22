import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  isSideBarVisible: boolean = false;

  courseContents = [
    { topic: 'Bitcoin' },
    { topic: 'Blockchain Beyond Bitcoin' },
    { topic: 'Ethereum' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
