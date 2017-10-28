import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class BudgetsService {

  budgetsUrl = 'https://comprasapp-udemy.firebaseio.com/budgets.json';
  budgetUrl = 'https://comprasapp-udemy.firebaseio.com/budgets';

  constructor(private http: Http) { }

  postBudget(budget: any) {
    const newBudget = JSON.stringify(budget);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.budgetsUrl, newBudget, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getBudgets() {
    return this.http.get(this.budgetsUrl)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  getBudget(id$: string) {
    const url = `${this.budgetUrl}/${id$}.json`;
    return this.http.get(url)
      .map(res => res.json());
  }

  putBudget(budget: any, id$: string) {
    const newBudget = JSON.stringify(budget);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.budgetUrl}/${id$}.json`;
    return this.http.put(url, newBudget, {headers})
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }

  delBudget(id$: string) {
    const url = `${this.budgetUrl}/${id$}.json`;
    return this.http.delete(url)
      .map(res => {
        console.log(res.json());
        return res.json();
      });
  }
}
