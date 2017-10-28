import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BudgetsService } from './../../services/budgets.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editbudget',
  templateUrl: './editbudget.component.html',
  styleUrls: ['./editbudget.component.css']
})
export class EditbudgetComponent implements OnInit {

  budgetForm: FormGroup;
  budget: any;
  base: any;
  type: any;
  tax: any = 0;
  total: any = 0;

  id: string;

  constructor(private bf: FormBuilder,
              private budgetService: BudgetsService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                this.activatedRouter.params
                  .subscribe(params => {
                    this.id = params['id'];
                    this.budgetService.getBudget(this.id)
                      .subscribe(budget => {
                        this.budget = budget;
                      });
                  });
              }

  ngOnInit() {
    this.budgetForm = this.bf.group({
      provider: ['', Validators.required ],
      date: ['', Validators.required ],
      concept: ['', [Validators.required, Validators.minLength(10) ]],
      base: ['', Validators.required ],
      type: ['', Validators.required ],
      tax: [this.tax, Validators.required ],
      total: [this.total, Validators.required ]
    });

    this.onChanges();
  }

  onChanges(): void {
    this.budgetForm.valueChanges.subscribe(value => {
      this.base = value.base;
      this.type = value.type;
      this.budgetForm.value.tax = this.base * this.type;
      this.budgetForm.value.total = this.base + (this.base * this.type);
    });
  }

  onSubmit() {
    this.budget = this.saveBudget();
    this.budgetService.putBudget(this.budget, this.id)
      .subscribe(newBudget => {
        this.router.navigate(['/budgets']);
      });
    this.budgetForm.reset();
  }

  saveBudget() {
    const savedBudget = {
      provider: this.budgetForm.get('provider').value,
      date: this.budgetForm.get('date').value,
      concept: this.budgetForm.get('concept').value,
      base: this.budgetForm.get('base').value,
      type: this.budgetForm.get('type').value,
      tax: this.budgetForm.get('tax').value,
      total: this.budgetForm.get('total').value,
    };
    return savedBudget;
  }
}
