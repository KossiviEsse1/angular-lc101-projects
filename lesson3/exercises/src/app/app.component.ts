import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';
  takeOffEnabled: boolean = true;
  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  gutterCheck(width, height) {
    if (width > 260000 || width < 0 || height < 0 || height > 340000) {
      this.color = 'orange';
    } else {
      this.color = 'blue';
    }
  }

  handleTakeOff() {
    let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
    if (result) {
       this.color = 'blue';
       this.height = 10000;
       this.width = 0;
       this.takeOffEnabled=false;
       this.message = 'Shuttle in flight.';
    }
  }
  handleLand(rocketImage) {
    let result = window.confirm('Are you sure the shuttle is ready to land?');
    if (result) {
       this.color = 'green';
       this.height = 0;
       this.width = 10000;
       this.takeOffEnabled=true;
       rocketImage.style.bottom = '0px';
       this.message = 'Shuttle has landed';
    }
  }
  handleAbort(rocketImage) {
    let result = window.confirm('Are you sure you want to abort?');
    if (result) {
       this.color = 'green';
       this.height = 0;
       this.width = 0;
       this.takeOffEnabled=true;
       rocketImage.style.bottom = '0px';
       this.message = 'Space shuttle ready for takeoff!';
    }
  }
  moveRocket(rocketImage, direction:string) {
    if (direction === 'right') {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    }
    if (direction === 'left') {
      let movement = parseInt(rocketImage.style.left) - 10 + 'px';
      rocketImage.style.left = movement;
      this.width = this.width - 10000;
    }
    if (direction === 'up') {
      let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height + 10000;
    }
    if (direction === 'down') {
      let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
      rocketImage.style.bottom = movement;
      this.height = this.height - 10000;
    }
 }
}
