import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addbudget',
  templateUrl: './addbudget.component.html',
  styleUrls: ['./addbudget.component.css']
})
export class AddbudgetComponent implements OnInit {

  budgetForm: FormGroup;
  budget: any;
  base: any;
  type: any;
  tax: any = 0;
  total: any = 0;

  constructor(private bf: FormBuilder) { }

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
