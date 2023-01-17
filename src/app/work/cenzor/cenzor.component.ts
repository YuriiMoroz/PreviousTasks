import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  private badWords: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public ListRender(badWords: string[]): void {
    let words = <HTMLSpanElement>document.querySelector(".words");
    words.innerText = ""
    if (badWords.length > 0) {
        for (let i = 0; i < badWords.length; i++) {
            words.innerText += ` ${badWords[i]}`
        }
    }
  }

  public change(str:string):string {
      let res: string ='';
      for (let i = 0; i < str.length; i++) {
          res+='*'        
      }
      return res;
  }

  public AddWord() {
    let input = <HTMLInputElement>document.querySelector(".input_text")
      if (input.value == '') {
          input.placeholder = 'Please write a word';
          input.classList.add('alert') 
      } else {
        input.placeholder = 'word here..';
        input.classList.remove('alert')
        this.badWords.push(input.value);
        this.ListRender(this.badWords);
        input.value = '';
      }
  }

  public ResetWords() {
    let words = <HTMLSpanElement>document.querySelector(".words");
    words.innerText = '';
    let area = <HTMLTextAreaElement>document.querySelector("textarea");
    area.value = '';
    this.badWords = [];
    area.classList.remove('greenBorder','alert')
  }


  public CenzorText() {
    let  area = <HTMLTextAreaElement>document.querySelector("textarea");
    if (area.value == '') {
      area.placeholder = 'Please write a word';
      area.classList.add('alert') 
    } else{
      let text: string[] = area.value.split(' ');
      for (let i = 0; i <= text.length; i++) {
          for (let j = 0; j < this.badWords.length; j++) {
              if(text[i]==this.badWords[j]){
                  text[i]=this.change(text[i])
              }
          }
      }
      area.value = text.join(' ');
      area.classList.add('greenBorder')
    }
  }

}
