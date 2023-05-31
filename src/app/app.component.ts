import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  failsList: string[] = new Array('nao', 'nao', 'nao', 'nao', 'nao',
    'nao', 'nao', 'nao', 'nao', 'nao',
    'sim', 'nao', 'nao', 'nao', 'nao',
    'nao', 'nao', 'sim', 'nao', 'sim',
    'nao', 'sim', 'nao');

  totalFails: number = 0;
  showResult: boolean = false;

  validateForm() {
    let alertMessage = 'Campos obrigatórios não preenchidos!';

    if (!this.isRadioChecked('question1')) {
      alert(alertMessage);
      return;
    } else if (!this.isRadioChecked('question2')) {
      alert(alertMessage);
      return;
    } else if (!this.isRadioChecked('question3')) {
      alert(alertMessage);
      return;
    }
    // } else if (!this.isRadioChecked('question4')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question5')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question6')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question7')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question8')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question9')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question10')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question11')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question12')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question13')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question14')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question15')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question16')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question17')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question18')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question19')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question20')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question21')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question22')) {
    //   alert(alertMessage);
    //   return;
    // } else if (!this.isRadioChecked('question23')) {
    //   alert(alertMessage);
    //   return;
    // }

    this.checkResults();
  }

  checkResults() {
    this.resetTotalFails();

    this.checkQuestion(document.getElementsByName('question1'), 1);
    this.checkQuestion(document.getElementsByName('question2'), 2);
    this.checkQuestion(document.getElementsByName('question3'), 3);
    // this.checkQuestion(document.getElementsByName('question4'), 4);
    // this.checkQuestion(document.getElementsByName('question5'), 5);
    // this.checkQuestion(document.getElementsByName('question6'), 6);
    // this.checkQuestion(document.getElementsByName('question7'), 7);
    // this.checkQuestion(document.getElementsByName('question8'), 8);
    // this.checkQuestion(document.getElementsByName('question9'), 9);
    // this.checkQuestion(document.getElementsByName('question10'), 10);
    // this.checkQuestion(document.getElementsByName('question11'), 11);
    // this.checkQuestion(document.getElementsByName('question12'), 12);
    // this.checkQuestion(document.getElementsByName('question13'), 13);
    // this.checkQuestion(document.getElementsByName('question14'), 14);
    // this.checkQuestion(document.getElementsByName('question15'), 15);
    // this.checkQuestion(document.getElementsByName('question16'), 16);
    // this.checkQuestion(document.getElementsByName('question17'), 17);
    // this.checkQuestion(document.getElementsByName('question18'), 18);
    // this.checkQuestion(document.getElementsByName('question19'), 19);
    // this.checkQuestion(document.getElementsByName('question20'), 20);
    // this.checkQuestion(document.getElementsByName('question21'), 21);
    // this.checkQuestion(document.getElementsByName('question22'), 22);
    // this.checkQuestion(document.getElementsByName('question23'), 23);

    this.printTotalFails();
    this.setFocusOnResult();
  }

  resetTotalFails() {
    this.totalFails = 0;
  }

  printTotalFails() {
    this.showResult = true;
    // document.getElementById("result").innerHTML = `Total de falhas: ${this.totalFails}`;
    // document.getElementById("result").style.fontSize = '1.5em';
    // document.getElementById("result").style.margin = '2em 0';
    // document.getElementById("result").style.fontWeight = 'bold';
  }

  checkQuestion(option: any, failsListPosition: number) {
    for (let i = 0; i < option.length; i++) {
      if (option[i].checked) {
        if (option[i].value == this.failsList[failsListPosition - 1]) {
          this.totalFails++;
        }
      }
    }
  }

  isRadioChecked(inputName: any) {
    const inputs: NodeListOf<HTMLElement> = document.getElementsByName(inputName);
    let isRadioChecked: boolean = false;

    inputs.forEach((radio: any) => {
      if (radio.checked) {
        isRadioChecked = true;
        return;
      }
    });

    return isRadioChecked;
  }

  setFocusOnResult() {
    let el = document.getElementById("result");

    if (el) {
      el.scrollIntoView();
    }
  }
}
