import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class MatchPassService {

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (control: AbstractControl):ValidationErrors | null => {
      const passwordControl = control.get(password);
      const confirmPasswordControl =  control.get(confirmPassword);

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return { passwordMismatch: true };
        
      } else {
        confirmPasswordControl.setErrors(null);
        return null;
      }
    };
  }
}
