import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }
  text = [
    'Frontend developer'
  ];
  line = 0;
  count = 0;
  result = '';

  typeLine(): void {
    const interval = setTimeout(
      () => {
        this.result += this.text[this.line][this.count];
        const quest = document.getElementById('text');
        if (!!quest) {
          quest.innerHTML = this.result + '|';
          this.count++;
          if (this.count >= this.text[this.line].length) {
            this.count = 0;
            this.line++;

            // if (this.line === this.text.length) {
            //   clearTimeout(interval);
            //   quest.innerHTML = this.result;
            //   console.log(this.result);
            //   return true;
            // }
          }
        }
        this.typeLine();
        return;
      }, 50);
  }


  ngOnInit(): void {
    this.typeLine();
  }
}
