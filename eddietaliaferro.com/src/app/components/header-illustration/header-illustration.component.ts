import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import * as confetti from 'canvas-confetti';

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

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef) { }

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
    // let bluePillMessage = document.getElementById('blue-pill-message');
    // bluePillMessage.style.opacity = '1';
    // bluePillMessage.style.transition = '0.5s';
    // bluePillMessage.style.transform = 'translate(18px, 330px)';

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

    // Target every number in the line individually.
    function bluePillCodeDestruction(element, seq) {
      console.log(element)
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
    console.clear()


    // Get elements parent, then rotate, following by a fall.
    function fallingLines(element: HTMLElement) {
      console.log(element);
      element.style.transition = '0.5s';
      console.log(element.getBoundingClientRect())
      let x = element.getBoundingClientRect().x;
      let y = element.getBoundingClientRect().y;
      element.style.transformOrigin = `${x}+'px '+${y}+'px'`;
      element.style.animation = 'falling-line-rotate 3s ease forwards';
      // element.style.animation = 'falling-line-rotate 1s ease forwards';
    }
    
    setTimeout(() => {
        fallingLines(document.getElementById('line-10'));
    }, 2000);
    setTimeout(() => {
        fallingLines(document.getElementById('line-13'));
    }, 3000);
    setTimeout(() => {
        fallingLines(document.getElementById('line-15'));
    }, 3500);

    // Change color of background
    console.clear();
    let svg = document.getElementById('pill-svg');
    svg.style.transition = '0.5s';
    svg.style.fill = 'green';
    svg.style.animation = 'svg-wrapper-fall 2s ease 5s forwards';

    // remove SVG Wrapper from DOM
      // add game over element to DOM
    setTimeout(() => {
      let gameoverWrapper = document.createElement('div');
      gameOverElementBuild();
      insertAfter(svg, gameoverWrapper);
  
      function insertAfter(referenceNode, newNode) {
        console.log('Game Over Node added to DOM');
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        setTimeout(() => {
          svg.remove();
        }, 2000);
      }
      
      function gameOverElementBuild() {
        let gameOverButton = document.createElement('button');
        gameOverButton.innerHTML = 'Game Over!'
        gameOverButton.style.position = 'relative';
        gameOverButton.style.bottom = '-20%';
        gameOverButton.style.backgroundColor = '#ff000063';
        gameOverButton.style.color = 'white';
        gameOverButton.style.width = '125px';
        gameOverButton.style.height = '40px';
        gameOverButton.style.fontSize = '1em';
        gameOverButton.style.fontWeight = '500';
        gameOverButton.style.border = '3px solid red';
        gameOverButton.style.boxShadow = '1px 1px 5px #000';
        gameOverButton.style.margin = '0 auto';
        gameOverButton.style.padding = '0.5em';
        gameOverButton.style.borderRadius = '5px';

        // Make sure picture is 642 x 389
        gameoverWrapper.appendChild(gameOverButton)
        gameoverWrapper.style.width = svg.getBoundingClientRect().width+'px';
        gameoverWrapper.style.height = svg.getBoundingClientRect().height+'px';
        // Meme Generator
        // https://imgflip.com/memegenerator/Matrix-Morpheus
        gameoverWrapper.style.backgroundImage = "url('https://i.imgflip.com/5t83kk.jpg')";
        gameoverWrapper.style.backgroundSize = 'contain';
        gameoverWrapper.style.backgroundRepeat = 'no-repeat';
        gameoverWrapper.style.margin = '3em auto';
        gameoverWrapper.style.opacity = '0';
        gameoverWrapper.style.animation = 'game-over-slide-up 1s ease 2s forwards';
        gameOverButton.addEventListener('click', () => {
          window.location.reload();
        })
      
        let headerWrapper = document.getElementById('landing-page-header');
        headerWrapper.style.transition = '0.5s';
        headerWrapper.style.animation = 'header-background-blue-pill-animation 1s ease 2s forwards';

        headerNameBackgroundAnimation();

        function headerNameBackgroundAnimation() {
          let headerName = document.getElementById('header-name');
          let newRedHeaderName = document.createElement('h3');
          let captions = document.getElementsByClassName('caption');
          for (let i = 0; i < captions.length; i++) {
            captions[i]['style'].transition = '0.5s';
            captions[i]['style'].color = 'red';
          }
          
          newRedHeaderName.innerHTML = 'Exxie Talixferro X';
          newRedHeaderName.style.color = 'white';
          newRedHeaderName.style.fontSize = '1.7em';
          newRedHeaderName.style.margin = '1em auto';
          newRedHeaderName.style.padding = '6px';
          newRedHeaderName.style.transition = '500ms';
          newRedHeaderName.style.borderRadius = '7px';
          newRedHeaderName.style.marginBottom = '0.5em';
          newRedHeaderName.style.boxShadow = '1px 1px 3px #0000006e';
          insertAfter(headerName, newRedHeaderName);

          function insertAfter(referenceNode, newNode) {
            console.log('Game Over Node added to DOM');
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            setTimeout(() => {
              headerName.remove();
            }, 10);
          }

          let degrees = 180;
          setInterval(() => {
            if (degrees === 360) {
              degrees = 0;
              // console.log('Going back to 0degs!')
            }
            degrees = degrees + 5;
            // console.log('Rotating Gradient');
            // console.log(degrees);
            newRedHeaderName.style.backgroundImage = "linear-gradient(" + degrees + "deg, red, #d01801, red)";
          },  50)
        }
      }
    }, 4000);
  }
  redPillSelect() {
    let bluePill = document.getElementById('blue-pill');
    let redPill = document.getElementById('red-pill');
    let selectPillMessage = document.getElementById('select-pill-message');
    let svg = document.getElementById('pill-svg');
    let background = document.getElementById('background');
    let headerWrapper = document.getElementById('landing-page-header');
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
  
    function transformPills() {
      bluePill.style.transform = 'translateX(-1000px)';
      redPill.style.transform = 'translate(105px, 30px) scale(2)';
      selectPillMessage.style.transform = 'cubic-bezier(0.95, 0.05, 0.795, 0.035)';
      selectPillMessage.style.transform = 'translateY(500px)';
      svg.style.boxShadow = 'none';
      background.style.transition = '0.5s';
      background.style.fill = 'none';
      selectPillMessage.style.opacity = '0';
      headerWrapper.style.transition = '1s';
      headerWrapper.style.animation = 'header-background-red-pill-animation 1s ease-in 2s forwards';
    }
    function addAnimationToLines() {
      bugLineStart.style.animation = 'number-color-animation 0.5s ease 0.1s forwards, number-up 0.5s ease 0.06s forwards';
      bugLineEnd.style.animation = 'number-color-animation 0.5s ease 0.2s forwards, number-up 0.5s ease 0.11s forwards';
      binaryLineTen.style.animation = 'number-color-animation 0.5s ease 0.2s forwards, number-up 0.5s ease 0.16s forwards';
      binaryLineEleven.style.animation = 'number-color-animation 0.5s ease 0.3s forwards, number-up 0.5s ease 0.21s forwards';
      binaryLineTwelve.style.animation = 'number-color-animation 0.5s ease 0.4s forwards, number-up 0.5s ease 0.26s forwards';
      binaryLineThirteen.style.animation = 'number-color-animation 0.5s ease 0.5s forwards, number-up 0.5s ease 0.31s forwards';
      binaryLineFourteen.style.animation = 'number-color-animation 0.5s ease 0.6s forwards, number-up 0.5s ease 0.36s forwards';
      binaryLineFifthteen.style.animation = 'number-color-animation 0.5s ease 0.7s forwards, number-up 0.5s ease 0.41s forwards';
      binaryLineSixteen.style.animation = 'number-color-animation 0.5s ease 0.8s forwards, number-up 0.5s ease 0.46s forwards';
      binaryLineSeventeen.style.animation = 'number-color-animation 0.5s ease 0.9s forwards, number-up 0.5s ease 0.51s forwards';
      binaryLineEigthteen.style.animation = 'number-color-animation 0.5s ease 1s forwards, number-up 0.5s ease 0.56s forwards';
      binaryLineNineteen.style.animation = 'number-color-animation 0.5s ease 1.1s forwards, number-up 0.5s ease 0.61s forwards';
      binaryLineTwenty.style.animation = 'number-color-animation 0.5s ease 1.2s forwards, number-up 0.5s ease 0.66s forwards';
      binaryLineTwentyOne.style.animation = 'number-color-animation 0.5s ease 1.3s forwards, number-up 0.5s ease 0.71s forwards';
    }
    function headerNameBackgroundAnimation() {
      let headerName = document.getElementById('header-name');
      let newRedHeaderName = document.createElement('h3');
      let captions = document.getElementsByClassName('caption');
      for (let i = 0; i < captions.length; i++) {
        captions[i]['style'].transition = '0.5s';
        captions[i]['style'].color = '#3cf63c';
      }
      
      newRedHeaderName.innerHTML = 'Eddie Taliaferro II';
      newRedHeaderName.style.color = 'white';
      newRedHeaderName.style.fontSize = '1.7em';
      newRedHeaderName.style.margin = '1em auto';
      newRedHeaderName.style.padding = '6px';
      newRedHeaderName.style.transition = '500ms';
      newRedHeaderName.style.borderRadius = '7px';
      newRedHeaderName.style.marginBottom = '0.5em';
      newRedHeaderName.style.boxShadow = '1px 1px 3px #0000006e';
      insertAfter(headerName, newRedHeaderName);

      function insertAfter(referenceNode, newNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        setTimeout(() => {
          headerName.remove();
        }, 10);
      }

      let degrees = 180;
      setInterval(() => {
        if (degrees === 360) {
          degrees = 0;
          // console.log('Going back to 0degs!')
        }
        degrees = degrees + 5;
        // console.log('Rotating Gradient');
        // console.log(degrees);
        newRedHeaderName.style.backgroundImage = "linear-gradient(" + degrees + "deg, #3cf63c, #369e2b, #3cf63c)";
      },  50)
    }
    function confettiGeneration(renderer, elementRef) {
      const confettiOne = renderer.createElement('canvas') as HTMLCanvasElement;
      confettiOne.style.zIndex = '9999';
      confettiOne.style.width = svg.getBoundingClientRect().width+'px';
      confettiOne.style.height = svg.getBoundingClientRect().height+'px';
      confettiOne.style.position = 'absolute';
      confettiOne.style.top = '0px';
      confettiOne.style.left = '0px';
      renderer.appendChild(elementRef.nativeElement, confettiOne);
      let confettiTriggerOne = confetti.create(confettiOne, {
        resize: true // will fit all screen sizes
      });
  
      let confettiInterval = setInterval(() => {
        confettiTriggerOne();
        confettiOne.style.top = (100 * Math.random())+'px';
        confettiOne.style.left = (400 * Math.random())+'px';
      }, 3000);
  
      setTimeout(() => {
        clearInterval(confettiInterval);
      }, 50000);

    }

    console.clear();
    transformPills();
    addAnimationToLines();
    headerNameBackgroundAnimation();
    confettiGeneration(this.renderer2, this.elementRef);
  }
}
