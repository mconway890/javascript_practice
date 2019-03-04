const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
        beep() {
        console.log('Beep Boop')
      }
  }
}

const tinCan = robotFactory('P-500', true);

tinCan.beep(); // Beep Boop
console.log(tinCan.model); // P-500
console.log(tinCan.mobile); // true


// ES6 property value shorthand

const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
