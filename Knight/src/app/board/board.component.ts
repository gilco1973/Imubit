import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  boardSize = [0, 1, 2, 3, 4, 5, 6, 7];
  currentPosition = { x: 0, y: 0 };
  constructor(private apiSvc: ApiService) { }

  ngOnInit() {
  }

}
