import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  FormsModule,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// INTERFACES
interface Role {
  value: string;
}

interface Day {
  value: string;
}

interface Subject {
  value: string;
}

@Component({
  selector: 'app-pawtector',
  providers: [provideNativeDateAdapter()],
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatTimepickerModule,
    MatIconButton,
    MatIconModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './pawtector.component.html',
  styleUrl: './pawtector.component.scss',
})
export class PawtectorComponent {
  imagePath: string = 'assets/images/pawtector/pawtector-banner.webp';

  // VOLUNTEER FORM GROUP
  volunteer_name: string = '';
  volunteer_email_phone: string = '';

  volunteer_other: string = '';
  volunteer_message: string = '';
  volunteer_otherRoleSelected = false;
  volunteer_submit = false;

  roles: Role[] = [
    { value: 'Outreach' },
    { value: 'Events' },
    { value: 'Fostering' },
    { value: 'Other' },
  ];

  days: Day[] = [
    { value: 'Monday' },
    { value: 'Tuesday' },
    { value: 'Wednesday' },
    { value: 'Thursday' },
    { value: 'Friday' },
    { value: 'Saturday' },
    { value: 'Sunday' },
  ];

  selectedDay: string | null = null;

  volunteer_form_data: FormGroup = new FormGroup({
    volunteer_name: new FormControl('', [Validators.required]),
    volunteer_email_phone: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^((\+639\d{9})|(09\d{9})|(\(02\)\d{7})|(\+632\d{7})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))$/,
      ),
    ]),
    volunteer_role: new FormControl('', Validators.required),
    volunteer_other: new FormControl('', [Validators.required]),
    volunteer_message: new FormControl(''),
    selectedDay: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
  });

  constructor() {
    // TIME FIELDS VALIDATION
    this.volunteer_form_data.get('endTime')?.valueChanges.subscribe(() => {
      this.validateTime();
    });
    this.volunteer_form_data.get('startTime')?.valueChanges.subscribe(() => {
      this.validateTime();
    });
  }

  //SCROLL TO VOLUNTEER FORM

  scrollToVolunteer() {
    const volunteerForm = document.getElementById('volunteer-form-id');
    if (volunteerForm) {
      volunteerForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  //OTHER ROLE SELECTED
  onRoleSelected(value: string): void {
    this.volunteer_otherRoleSelected = value === 'Other';
    const otherControl = this.volunteer_form_data.get('volunteer_other');

    if (this.volunteer_otherRoleSelected) {
      otherControl?.setValidators([Validators.required]);
    } else {
      otherControl?.clearValidators();
      otherControl?.reset();
    }

    otherControl?.updateValueAndValidity();
  }

  onDaySelected(day: string): void {
    this.selectedDay = day;
  }

  // VALIDATE TIME
  validateTime(): void {
    const startTime = this.volunteer_form_data.get('startTime')?.value;
    const endTime = this.volunteer_form_data.get('endTime')?.value;

    if (startTime && endTime) {
      const start = this.parseTime(startTime);
      const end = this.parseTime(endTime);

      const minTime = this.parseTime('07:00');
      const maxTime = this.parseTime('20:00');

      if (start !== null && minTime !== null && maxTime !== null) {
        if (start < minTime || start > maxTime) {
          this.volunteer_form_data
            .get('startTime')
            ?.setErrors({ outOfRange: true });
        } else {
          this.volunteer_form_data.get('startTime')?.setErrors(null);
        }
      }

      if (
        end !== null &&
        minTime !== null &&
        maxTime !== null &&
        start !== null
      ) {
        if (end < minTime || end > maxTime || end <= start) {
          this.volunteer_form_data
            .get('endTime')
            ?.setErrors({ outOfRange: true });
        } else {
          this.volunteer_form_data.get('endTime')?.setErrors(null);
        }
      }
    }
  }

  parseTime(time: any): number | null {
    if (typeof time === 'string') {
      const [hours, minutes] = time.split(':').map(Number);
      if (!isNaN(hours) && !isNaN(minutes)) {
        return hours * 60 + minutes;
      }
    } else if (time instanceof Date) {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      return hours * 60 + minutes;
    }
    return null;
  }

  submitToFormspree(url: string, data: any) {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Form successfully submitted to Formspree');
        } else {
          console.error('Form submission to Formspree failed');
        }
      })
      .catch((error) => {
        console.error('Error submitting form to Formspree:', error);
      });
  }

  // VOLUNTEER FORM SUBMIT
  OnClickVolunteer(data: {
    volunteer_name: string;
    volunteer_email_phone: string;
    volunteer_other: string;
    volunteer_message: string;
  }): void {
    this.volunteer_name = data.volunteer_name;
    this.volunteer_email_phone = data.volunteer_email_phone;
    this.volunteer_other = data.volunteer_other;
    this.volunteer_message = data.volunteer_message;

    if (this.volunteer_form_data.valid || this.availabilities.length > 0) {
      console.log('Form Submitted!', data);
      this.submitToFormspree('https://formspree.io/f/xovewayq', data);
    } else {
      console.log('Form Invalid!');
    }
  }

  //AVAILABILITY ARRAY
  availabilities: { day: string; startTime: string; endTime: string }[] = [];
  addAvailability(): void {
    const startTime = this.volunteer_form_data.get('startTime')?.value;
    const endTime = this.volunteer_form_data.get('endTime')?.value;

    if (this.selectedDay && startTime && endTime) {
      const start = this.parseTime(startTime);
      const end = this.parseTime(endTime);

      if (start !== null && end !== null && start >= end) {
        this.volunteer_form_data
          .get('startTime')
          ?.setErrors({ invalidTimeRange: true });
        this.volunteer_form_data
          .get('endTime')
          ?.setErrors({ invalidTimeRange: true });
        console.error(
          'Invalid time range: Start time must be earlier than End time.',
        );
        return;
      }
      this.availabilities.push({
        day: this.selectedDay,
        startTime: startTime,
        endTime: endTime,
      });

      this.volunteer_form_data.patchValue({
        selectedDay: '',
        startTime: '',
        endTime: '',
      });

      //CLEAR VALIDATOR AFTER ADDED A DAY
      this.selectedDay = null;
      this.volunteer_form_data.get('selectedDay')?.clearValidators();
      this.volunteer_form_data.get('startTime')?.clearValidators();
      this.volunteer_form_data.get('endTime')?.clearValidators();
      this.volunteer_form_data.get('selectedDay')?.updateValueAndValidity();
      this.volunteer_form_data.get('startTime')?.updateValueAndValidity();
      this.volunteer_form_data.get('endTime')?.updateValueAndValidity();
    }
  }

  removeAvailability(index: number): void {
    this.availabilities.splice(index, 1);
  }

  report_name: string = '';
  report_location: string = '';
  report_description: string = '';
  report_image: File | null = null;
  selectedFileName: string | null = null;
  report_submit = false;
  report_form_data: FormGroup = new FormGroup({
    report_name: new FormControl(''),
    report_location: new FormControl('', [Validators.required]),
    report_description: new FormControl('', [Validators.required]),
    report_image: new FormControl(''),
  });

  //SCROLL TO VOLUNTEER FORM

  scrollToReport() {
    const reportForm = document.getElementById('report-form-id');
    if (reportForm) {
      reportForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  //UPLOAD IMAGE FILE VALIDATION
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      const maxSizeInMB = 5;

      if (!allowedTypes.includes(file.type)) {
        this.report_form_data
          .get('report_image')
          ?.setErrors({ invalidType: true });
        this.selectedFileName = null;
        console.error(
          'Invalid file type. Only JPEG, PNG, and GIF are allowed.',
        );
      } else if (file.size > maxSizeInMB * 1024 * 1024) {
        this.report_form_data
          .get('report_image')
          ?.setErrors({ fileTooLarge: true });
        this.selectedFileName = null;
        console.error(`File size exceeds ${maxSizeInMB} MB.`);
      } else {
        this.report_form_data.get('report_image')?.setErrors(null);
        this.selectedFileName = file.name;
      }
    } else {
      this.selectedFileName = null;
      this.report_form_data.get('report_image')?.setErrors(null);
    }
  }

  // REPORT FORM SUBMIT
  OnClickReport(data: {
    report_name: string;
    report_location: string;
    report_description: string;
    report_image: File | null;
  }) {
    this.report_name = data.report_name;
    this.report_location = data.report_location;
    this.report_description = data.report_description;
    this.report_image = data.report_image;
    this.report_submit = true;

    if (this.report_form_data.valid) {
      console.log('Form Submitted!', data);
      this.submitToFormspree('https://formspree.io/f/mgvaywrv', data);
    } else {
      console.log('Form Invalid!');
    }
  }

  // CONTACT FORM GROUP
  contact_name: string = '';
  contact_email: string = '';
  contact_subject: string = '';
  contact_choice: string = '';
  contact_message: string = '';
  contact_submit = false;

  subjects: Subject[] = [
    { value: ' Queries' },
    { value: 'Feedback' },
    { value: 'Adoption' },
  ];

  contact_form_data: FormGroup = new FormGroup({
    contact_name: new FormControl('', [Validators.required]),
    contact_email: new FormControl('', [Validators.required, Validators.email]),
    contact_subject: new FormControl('', [Validators.required]),
    contact_message: new FormControl('', [Validators.required]),
  });

  // FORM SUBMIT
  OnClickContact(data: {
    contact_name: string;
    contact_email: string;
    contact_subject: string;
    contact_message: string;
  }) {
    this.contact_name = data.contact_name;
    this.contact_email = data.contact_email;
    this.contact_subject = data.contact_subject;
    this.contact_message = data.contact_message;

    if (this.contact_form_data.valid) {
      console.log('Form Submitted!');
      this.submitToFormspree('https://formspree.io/f/mpwprakq', data);
    } else {
      console.log('Form Invalid!');
    }
  }
}
