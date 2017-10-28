import { Component, OnInit } from '@angular/core';
import { BudgetsService } from './../../services/budgets.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css']
})
export class BudgetsComponent implements OnInit {

  budgets: any[] = [];

  constructor(private budgetsServices: BudgetsService) {
    this.buildBudgets();
  }

  ngOnInit() {
  }

  deleteBudget(id$: string) {
    this.budgetsServices.delBudget(id$)
      .subscribe(res => {
        console.log(res);
        this.budgets = [];
        this.buildBudgets();
      });
  }

  buildBudgets() {
    this.budgetsServices.getBudgets()
      .subscribe(budgets => {
        for (const id$ in budgets) {
          const p = budgets[id$];
          p.id = id$;
          this.budgets.push(budgets[id$]);
        }
      });
  }
}
