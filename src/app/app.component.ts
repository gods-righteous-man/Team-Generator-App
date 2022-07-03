import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMember:string = "";
  members:string[] = [];
  errorMessage:string = "";
  numTeams: number | "" = "";
  teams: string[][] = [];

  onInput(member:string){
    this.newMember = member;
    //console.log(this.newMember);
     
  }

  addMember(){

    if(!this.newMember){
      this.errorMessage = "Name cant be empty";
      return;
    }

    this.errorMessage = "";
    this.members.push(this.newMember);
    this.newMember = "";
    
  }

  onNumberOfTeamsInput(value: string){
    this.numTeams = Number(value);
  }

  generateTeams(){

    if(!this.numTeams || this.numTeams <= 0){
      this.errorMessage = "Invalid number of teams";
      return;
    }

    if(this.members.length < this.numTeams){
       this.errorMessage = "Not enough members";
       return;
    }

    this.errorMessage = "";

    const allMembers = [...this.members];

    while(allMembers.length){

      for(let i = 0; i < this.numTeams; i++){
        const randIndex = Math.floor(Math.random() * allMembers.length);
        console.log(randIndex);
  
        const selectedMember = allMembers.splice(randIndex, 1)[0];
  

        if (!selectedMember){
          break;
        }
        if(this.teams[i]){
          this.teams[i].push(selectedMember);
        }
        else{
          this.teams[i] = [selectedMember];
        }
  
      }

    }
    console.log(this.teams);

    this.members = [];
    this.newMember = "";
    this.numTeams = "";
  }
  


}
