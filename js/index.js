class CountdownTimer {
  constructor({ selector, targetData }) {
    this.selector = selector;
    this.targetData = targetData;
    this.daysRef = document.querySelector(
      `${this.selector} [data-value="days"]`
    );
    this.hoursRef = document.querySelector(
      `${this.selector} [data-value = "hours"]`
    );
    this.minsRef = document.querySelector(
      `${this.selector}  [data-value = "mins"]`
    );
    this.secsRef = document.querySelector(
      `${this.selector} [data-value= "secs"]`
    );
    console.log(this.targetData);
  }
  start() {
    setInterval(() => {
      const time = this.targetData - Date.now();
      this.timeTransform(time);
    }, 1000);
  }

  timeTransform(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 24)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60 * 24)) / 1000);
    this.changeTimer(days, hours, mins, secs);
  }

  changeTimer(days, hours, mins, secs) {
    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }
}
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetData: new Date("Dec 12, 2022"),
});
timer.start();

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);
