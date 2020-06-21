import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';
import { Message } from '../model/message.model';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  responseMessage = '';
  responseMessageType = '';
  registerForm: FormGroup;
  submitted = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      salutation: ['', Validators.required],
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.minLength(10), Validators.pattern('[+()0-9\-]*')]],
      commitments: ['', Validators.required],
      currentcity: ['', Validators.required],
      working_hours: ['', Validators.required],
      Internship_role: ['', Validators.required],
      Benefits: ['', Validators.required],
      date: ['', Validators.required],
      message: []
    });

    this.registerForm.controls['salutation'].setValue('', { onlySelf: true });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  requestBody(): Message {
    return {
      salutation: this.registerForm.value.salutation,
      fname: this.registerForm.value.fname,
      lname: this.registerForm.value.lname,
      email: this.registerForm.value.email,
      phoneNumber: this.registerForm.value.phone_number,
      message: this.registerForm.value.message,
      date: this.registerForm.value.date,
      currentcity: this.registerForm.value.currentcity,
      commitments: this.registerForm.value.commitments,
      working_hours: this.registerForm.value.working_hours,
      Internship_role: this.registerForm.value.Internship_role,
      Benefits: this.registerForm.value.Benefits

    }
  }
  async processForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      try {
        await Promise.all([
          this.http.post(`${environment.baseUrl + 'sendToZohoCrm'}`, this.requestBody())
            .pipe(take(1))
            .toPromise(),
          this.http.post(`${environment.baseUrl + 'sendMessage'}`, this.requestBody())
            .pipe(take(1))
            .toPromise()
        ].map(p => p.catch(e => e)));

        this.onReset();
        this.responseMessage = "Thanks, we received your message.";
        this.responseMessageType = "success";

      } catch (error) {
        console.log(error);
        this.responseMessageType = "error";
        this.responseMessage = "Oops some error has occurred please try again ";
      }
    }
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.controls['salutation'].setValue('', { onlySelf: true });
  }
}
