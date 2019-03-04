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
