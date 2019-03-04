class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  static generatePassword() {
    return Math.floor(Math.random() * 10000);
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Doctor extends HospitalEmployee {
  constructor(name, insurance) {
    super(name);
    this._insurance = insurance;
  }

  get insurance() {
    return this._insurance;
  }

  addInsurance(newInsurance) {
    this.insurance.push(newInsurance);
  }
}

const doctorGrey = new Doctor('Grey', ['Empire', 'Cigna', 'Medicaid']);

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }

  get certifications() {
    return this._certifications;
  }

  addCertification(newCertification) {
    this.certifications.push(newCertification);
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);

doctorGrey.takeVacationDays(4)
console.log(doctorGrey);
doctorGrey.addInsurance('Medicare');
console.log(doctorGrey.name, doctorGrey.insurance);
