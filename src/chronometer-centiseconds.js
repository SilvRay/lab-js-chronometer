class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback) {
        printTimeCallback();
      } else {
      }
    }, 10);
  }

  getMinutes() {
    let minPassed = Math.floor(this.currentTime / 6000);
    return minPassed;
  }

  getSeconds() {
    let secondsPassed = Math.floor((this.currentTime / 100) % 60);
    return secondsPassed;
  }

  getCentiseconds() {
    return Math.floor(this.currentTime % 100);
  }

  computeTwoDigitNumber(value) {
    if (value > 10) {
      return String(value);
    } else {
      return "0" + String(value);
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes()); // String
    let sec = this.computeTwoDigitNumber(this.getSeconds()); // String
    let centiSec = this.computeTwoDigitNumber(this.getCentiseconds()); // String

    let validFormat = `${min}:${sec}.${centiSec}`;

    return validFormat;
  }
}
