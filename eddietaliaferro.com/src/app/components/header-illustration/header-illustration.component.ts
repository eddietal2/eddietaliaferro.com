import { Component, OnInit } from '@angular/core';
const confetti = require('canvas-confetti');

@Component({
  selector: 'app-header-illustration',
  templateUrl: './header-illustration.component.html',
  styleUrls: ['./header-illustration.component.scss'],
})
export class HeaderIllustrationComponent implements OnInit {
  svgElement: any;
  bluePill: any;
  redPill: any;
  bugOne: HTMLElement;
  bugTwo: HTMLElement;
  bugThree: HTMLElement;
  bugFour: HTMLElement;
  pillSVGWrapper;

  constructor() { }

  ngOnInit() {
    console.clear()
    this.pillSVGWrapper = document.getElementById('pill-svg').cloneNode;
    this.bugNumbersAnimation();
    }
  bugNumbersAnimation() {
    // The numbers will each rotation up to 10 seconds
    // After 10 seconds, they will all shift up during the pill choice

    let bugOne = document.getElementById('bug-red-1');
    let bugTwo = document.getElementById('bug-red-2');
    let bugThree = document.getElementById('bug-red-3');
    let bugFour = document.getElementById('bug-red-4');
    console.log(bugOne);
    console.log(bugTwo);
    console.log(bugThree);
    console.log(bugFour);

    shiftBugNumbersUp();

    function shiftBugNumbersUp() {
      setTimeout(() => {
        // Add transition to all bug numbers
        bugOne.style.transition = '0.5s';
        bugTwo.style.transition = '0.5s';
        bugThree.style.transition = '0.5s';
        bugFour.style.transition = '0.5s';

        // Shift up all numbers
        bugOne.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards'
        bugTwo.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards'
        bugThree.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards'
        bugFour.style.animation = 'shift-bug-numbers-up-animation 1s ease forwards'

        // Change their colors at the end of animation
        bugOne.style.fill = 'yellow';
        bugTwo.style.fill = 'yellow';
        bugThree.style.fill = 'yellow';
        bugFour.style.fill = 'yellow';
      }, 10000);
    }
  }
  bluePillSelect() {
    console.clear();
    console.log('User has selected Blue Pill');

    // Take Red Pill out of frame
    let redPill = document.getElementById('red-pill');
    redPill.style.transform = 'translateX(1000px)';

    // Highlight Blue Pill
    let bluePill = document.getElementById('blue-pill');
    bluePill.style.transform = 'translate(105px, 30px) scale(2)';
    // Add shining highlight animation similar to gold name tag

    // Take Select Pill message out of frame
    let selectPillMessage = document.getElementById('select-pill-message');
    selectPillMessage.style.transform = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
    selectPillMessage.style.transform = 'translateY(500px)';
    selectPillMessage.style.opacity = '0';

    // Add Blue Pill message to frame
    let bluePillMessage = document.getElementById('blue-pill-message');
    bluePillMessage.style.opacity = '1';
    bluePillMessage.style.transition = '0.5s';
    bluePillMessage.style.transform = 'translate(18px, 330px)';

    // Change color of Tspan/text elements to blue / lightlight
    // First visible row is line 10
    // Destroy lines?
    let bugLineStart = document.getElementById('bug-line-start');
    let bugLineEnd = document.getElementById('bug-line-end');
    let bugLineBinaryStart = bugLineStart.children
    let bugLineBinaryEnd = bugLineEnd.children
    let binaryLineTen = document.getElementById('line-10').children;
    let binaryLineEleven = document.getElementById('line-11').children;
    let binaryLineTwelve = document.getElementById('line-12').children;
    let binaryLineThirteen = document.getElementById('line-13').children;
    let binaryLineFourteen = document.getElementById('line-14').children;
    let binaryLineFifthteen = document.getElementById('line-15').children;
    let binaryLineSixteen = document.getElementById('line-16').children;
    let binaryLineSeventeen = document.getElementById('line-17').children;
    let binaryLineEigthteen = document.getElementById('line-18').children;
    let binaryLineNineteen = document.getElementById('line-19').children;
    let binaryLineTwenty = document.getElementById('line-20').children;
    let binaryLineTwentyOne = document.getElementById('line-21').children;

    function bluePillCodeDestruction(element, seq) {
      for (var i = 0; i < element.length; i++) {
        element[i].style.animation = 'turn-red 1s ease ' + (seq * i * 30) + 'ms forwards';
      }
    }

    bluePillCodeDestruction(bugLineBinaryStart, 1);
    bluePillCodeDestruction(bugLineBinaryEnd, 2);
    bluePillCodeDestruction(binaryLineTen, 3);
    bluePillCodeDestruction(binaryLineEleven, 4);
    bluePillCodeDestruction(binaryLineTwelve, 5);
    bluePillCodeDestruction(binaryLineThirteen, 6);
    bluePillCodeDestruction(binaryLineFourteen, 7);
    bluePillCodeDestruction(binaryLineFifthteen, 8);
    bluePillCodeDestruction(binaryLineSixteen, 9);
    bluePillCodeDestruction(binaryLineSeventeen, 10);
    bluePillCodeDestruction(binaryLineEigthteen, 11);
    bluePillCodeDestruction(binaryLineNineteen, 12);
    bluePillCodeDestruction(binaryLineTwenty, 13);
    bluePillCodeDestruction(binaryLineTwentyOne, 14);

    // Change color of background
    let background = document.getElementById('background');
    background.style.transition = '0.5s';
    background.style.fill = 'white';

    // Add click listener to Restart Button
    let restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', () => {
      console.log('This is working!');
      let pillSVGWrapper = document.getElementById('pill-svg');
      pillSVGWrapper.style.display = 'none';
      setTimeout(() => {
        pillSVGWrapper.replaceWith(this.pillSVGWrapper)
      }, 1000);
    })
  }
  redPillSelect() {
    console.clear();
    console.log('User has selected Blue Pill');
    var myCanvas = document.createElement('canvas');
    document.appendChild(myCanvas);

    var myConfetti = confetti.create(myCanvas, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 100,
      spread: 160
      // any other options from the global
      // confetti function
    });

    // Take Red Pill out of frame
    let bluePill = document.getElementById('blue-pill');
    bluePill.style.transform = 'translateX(-1000px)';

    // Highlight Blue Pill
    let redPill = document.getElementById('red-pill');
    redPill.style.transform = 'translate(105px, 30px) scale(2)';
    // Add shining highlight animation similar to gold name tag

    // Take Select Pill message out of frame
    let selectPillMessage = document.getElementById('select-pill-message');
    selectPillMessage.style.transform = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
    selectPillMessage.style.transform = 'translateY(500px)';
    selectPillMessage.style.opacity = '0';

    // Add Blue Pill message to frame
    let redPillMessage = document.getElementById('red-pill-message');
    redPillMessage.style.opacity = '1';
    redPillMessage.style.transition = '0.5s';
    redPillMessage.style.transform = 'translate(18px, 330px)';

    // Change color of Tspan/text elements to blue / lightlight
    // First visible row is line 10
    // Destroy lines?
    let bugLineStart = document.getElementById('bug-line-start');
    let bugLineEnd = document.getElementById('bug-line-end');
    let binaryLineTen = document.getElementById('line-10');
    let binaryLineEleven = document.getElementById('line-11');
    let binaryLineTwelve = document.getElementById('line-12');
    let binaryLineThirteen = document.getElementById('line-13');
    let binaryLineFourteen = document.getElementById('line-14');
    let binaryLineFifthteen = document.getElementById('line-15');
    let binaryLineSixteen = document.getElementById('line-16');
    let binaryLineSeventeen = document.getElementById('line-17');
    let binaryLineEigthteen = document.getElementById('line-18');
    let binaryLineNineteen = document.getElementById('line-19');
    let binaryLineTwenty = document.getElementById('line-20');
    let binaryLineTwentyOne = document.getElementById('line-21');

    function redPillCodeDestruction(element, seq) {
      console.log(element)
      for (var i = 0; i < element.length; i++) {
        // element[i].style.animation = 'number-color-animation ' + (seq * i * 30) + 'ms forwards, number-up' + (seq * i * 30) + 'ms forwards';
        element[i].style.animation = 'number-up 0.5s ease forwards';
      }
    }

    redPillCodeDestruction(bugLineStart, 1);
    redPillCodeDestruction(bugLineEnd, 2);
    redPillCodeDestruction(binaryLineTen, 3);
    redPillCodeDestruction(binaryLineEleven, 4);
    redPillCodeDestruction(binaryLineTwelve, 5);
    redPillCodeDestruction(binaryLineThirteen, 6);
    redPillCodeDestruction(binaryLineFourteen, 7);
    redPillCodeDestruction(binaryLineFifthteen, 8);
    redPillCodeDestruction(binaryLineSixteen, 9);
    redPillCodeDestruction(binaryLineSeventeen, 10);
    redPillCodeDestruction(binaryLineEigthteen, 11);
    redPillCodeDestruction(binaryLineNineteen, 12);
    redPillCodeDestruction(binaryLineTwenty, 13);
    redPillCodeDestruction(binaryLineTwentyOne, 14);

    // Change color of background
    let background = document.getElementById('background');
    background.style.transition = '0.5s';
    background.style.fill = 'lightred';

    // Add click listener to Restart Button
    let restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', () => {
      console.log('This is working!');
      let pillSVGWrapper = document.getElementById('pill-svg');
      pillSVGWrapper.style.display = 'none';
      setTimeout(() => {
        pillSVGWrapper.replaceWith(this.pillSVGWrapper)
      }, 1000);
    })
  }
}
