import { Component, OnInit } from '@angular/core';
import { SubjectsService } from './subjects.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
