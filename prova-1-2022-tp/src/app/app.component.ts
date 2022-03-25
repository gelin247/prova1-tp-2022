
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Team } from './team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  newTeam: Team = {} as Team
  teamList: Team[] = []

  saveData(form: NgForm) {
    this.teamList.push(this.newTeam)
    this.newTeam = {} as Team
    form.resetForm()
    this.checkPoints()
    console.log(this.teamList)
    
  }

checkPoints(){
  for (let i = 0; i < this.teamList.length; i++) {
    for (let j = 0; j < this.teamList.length - 1; j++) {

      if (this.teamList[j].points > this.teamList[j + 1].points) {
        let swap = this.teamList[j];
        this.teamList[j] = this.teamList[j + 1];
        this.teamList[j + 1] = swap;
      }
    }
  }
  this.teamList = this.teamList.reverse()



}

}
