import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  error: String = '';
  cardsArr = [];
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.getCardDetails();
  }

  getCardDetails() {
    this.error = '';
    this.dashboardService.getDashboardCardsDetails().pipe().subscribe((res: any) => {
      if (res && res.cards && res.cards.length > 0) {
        this.cardsArr = res.cards;
      } else {
        this.error = 'Error in loading dashboard cards details';
      }
    });
  }

}
