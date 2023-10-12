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
      }
    }, 1000);
  }

  getMinutes() {
    let minPassed = Math.floor(this.currentTime / 60);
    return minPassed;
  }

  getSeconds() {
    let secondsPassed = this.currentTime % 60;
    return secondsPassed;
  }

  computeTwoDigitNumber(value) {
    if (value >= 10) {
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
    console.log(this.computeTwoDigitNumber(this.getMinutes()));
    let min = this.computeTwoDigitNumber(this.getMinutes()); // String
    let sec = this.computeTwoDigitNumber(this.getSeconds()); // String

    let validFormat = `${min}:${sec}`;

    return validFormat;
  }
}
