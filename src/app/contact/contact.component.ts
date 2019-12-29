import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { zohoConfig } from "../config/zoho.config";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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
      our_services: ['', Validators.required],
      message: []
    });

    this.registerForm.controls['our_services'].setValue('', { onlySelf: true });
    this.registerForm.controls['salutation'].setValue('', { onlySelf: true });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  processForm() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    } else {
      const headers1 = new HttpHeaders();
      // this.http.post("https://us-central1-newlininfotech-dc00e.cloudfunctions.net/sendMessage", {
      this.http.post("https://us-central1-newlininfotech-dc00e.cloudfunctions.net/sendToZohoCrm", {
        salutation: this.registerForm.value.salutation, fname: this.registerForm.value.fname, lname: this.registerForm.value.lname, email: this.registerForm.value.email, phone_number: this.registerForm.value.phone_number, our_services: this.registerForm.value.our_services, message: this.registerForm.value.message
      }, { headers: headers1 })
        .subscribe((res2: any) => {
          if (res2.data[0].code === 'SUCCESS') {
            this.responseMessage = "Thanks, we received your message.";
            this.responseMessageType = "success";
            this.onReset();
          }
        },
          (err) => { this.responseMessageType = "error"; this.responseMessage = "Oops some error has occurred please try again "; });
    }

  }

  sendToZohoCrm() {

  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
    this.registerForm.controls['our_services'].setValue('', { onlySelf: true });
    this.registerForm.controls['salutation'].setValue('', { onlySelf: true });
  }

}
