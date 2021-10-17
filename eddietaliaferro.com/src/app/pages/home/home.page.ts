import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { format, parseISO } from 'date-fns';
import { Subscription } from 'rxjs';
import { BlogService } from 'src/app/services/blog/blog.service';
import { ProjectService } from 'src/app/services/project/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  latestBlogs;
  latestProjects;
  projectServiceSub: Subscription;
  blogServiceSub: Subscription;

  constructor(
    private router: Router,
    private blogService: BlogService,
    private projectService: ProjectService,
    ) { }

  ngOnInit() {
    this.headerNameBackgroundAnimation();
    this.getBlogs();
    this.getProjects();
  }
  ngAfterViewInit(){
    window.onscroll = function () {
    };
  }
  headerNameBackgroundAnimation() {
    let headerName = document.getElementById('header-name');
    let degrees = 180;
    setInterval(() => {
      if (degrees === 360) {
        degrees = 0;
        // console.log('Going back to 0degs!')
      }
      degrees = degrees + 5;
      // console.log('Rotating Gradient');
      // console.log(degrees);
      headerName.style.backgroundImage = "linear-gradient(" + degrees + "deg, #847145, #d8cca8, #847145)";
    },  50)
  }
  scrollAnimations(e) {
    let scrollTop = e.detail.scrollTop;
    let widowWidth = window.innerWidth;

    // console.log('\n');
    // console.log('\n');
    // console.log('\n');
    console.log('\n');
    console.log('%cScrollTop:  ', 'background: #222; color: #bada55');
    console.log(scrollTop);
    console.log('\n');

    // Services Animation Wrappers
    let servicesWrapperOffsetTop = document.getElementById('services').offsetTop;

    // console.log('Services Wrapper OffsetTop: ');
    // console.log(servicesWrapperOffsetTop);
    // console.log('\n');

    let designIconWrapperOffsetTop = (document.getElementById('design-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;
    let developmentIconWrapperOffsetTop = (document.getElementById('development-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;
    let instructingIconWrapperOffsetTop = (document.getElementById('instructing-icon-wrapper').parentElement.offsetTop) + servicesWrapperOffsetTop;

    // console.log('Design Icon Wrapper OffsetTop: ');
    // console.log(designIconWrapperOffsetTop);

    // console.log('Development Icon Wrapper OffsetTop: ');
    // console.log(developmentIconWrapperOffsetTop);

    // console.log('Instructing Icon Wrapper OffsetTop: ');
    // console.log(instructingIconWrapperOffsetTop);
    // console.log('\n');

    // Yin-Ying Animation Wrappers
    let yinYangWrapperOffsetTop = (document.getElementById('yin-yang-wrapper')).parentElement.parentElement.offsetTop;
    console.log('Yin Yang Wrapper OffsetTop: ');
    console.log(yinYangWrapperOffsetTop);
    console.log('\n');

    // console.log('Window Width: ');
    // console.log(widowWidth);
    // console.log('\n');

    // Design Icon Animation
    if( designIconWrapperOffsetTop >= scrollTop ) {
      // console.log('Released Design Icon Animation trigger');
      this.designIconAnimationRelease((designIconWrapperOffsetTop - 500), scrollTop);
    }
    if( (designIconWrapperOffsetTop - 500) <= scrollTop) {
      // console.log('Trigger Design Icon Animation');
      this.designIconAnimationTrigger((designIconWrapperOffsetTop - 500), scrollTop);
    }

    // Development Icon Animation
    if( developmentIconWrapperOffsetTop >= scrollTop  ) {
      // console.log('Released Development Icon Animation trigger');
      this.developmentIconAnimationRelease((developmentIconWrapperOffsetTop - 500) , scrollTop);
    }
    if( (developmentIconWrapperOffsetTop - 500) <= scrollTop) {
      // console.log('Trigger Development Icon Animation');
      this.developmentIconAnimationTrigger((developmentIconWrapperOffsetTop - 500), scrollTop);
    }

    // Instructing Icon Animation
    if( instructingIconWrapperOffsetTop >= scrollTop ) {
      // console.log('Released Instructing Icon Animation');
      this.instructinIconAnimationRelease(((instructingIconWrapperOffsetTop - 500) ), scrollTop);
    }
    if( (instructingIconWrapperOffsetTop - 500) <= scrollTop) {
      // console.log('Trigger Instructing Icon Animation');
      this.instructinIconAnimationTrigger((instructingIconWrapperOffsetTop - 500), scrollTop);
    }

    // Yin Yang Animation
    if( yinYangWrapperOffsetTop > scrollTop ) {
      console.log('Released Instructing Icon Animation');
      this.yinYangRotateAnimationRelease(((yinYangWrapperOffsetTop - 500) ), scrollTop);
    }
    if( (yinYangWrapperOffsetTop - 500) < scrollTop) {
      console.log('Trigger Instructing Icon Animation');
      this.yinYangRotateAnimationTrigger((yinYangWrapperOffsetTop - 500), scrollTop);
    }

    
  }

  // Design Icon
  designIconAnimationRelease(designIconWrapperOffsetTop, scrollTop) {
    let setSquare =  document.getElementById('set-square');
    let setSquareAnimationLength = -(designIconWrapperOffsetTop - scrollTop)/100;
    // console.log(setSquareAnimationLength);

    // I need to calculate the distance from the SVGs to the top of the services element.

    setSquare.style.opacity = setSquareAnimationLength.toString();
    // setSquare.style.transform = 'translate(0,-30px)';
  }
  designIconAnimationTrigger(designIconWrapperOffsetTop, scrollTop) {
    let setSquare =  document.getElementById('set-square');
    let setSquareAnimationLength = -(designIconWrapperOffsetTop - scrollTop)/300;
    // console.log(setSquareAnimationLength);
    if(setSquareAnimationLength <= 0.99) {
      // console.log('First half of color animation!')
      setSquare.style.stroke = "#d8cca8"
    }
    if(setSquareAnimationLength > 0.99) {
      // console.log('Second half of color animation!')
      setSquare.style.stroke = "#49bde5"
    }
    setSquare.style.opacity = setSquareAnimationLength.toString();
    // setSquare.style.transform = 'translateY(0,0px)';
  }

  // Development Icon
  developmentIconAnimationRelease(developmentIconWrapperOffsetTop, scrollTop) {
    let openingBracket = document.getElementById('opening-bracket');
    let closingBracket = document.getElementById('closing-bracket');
    let forwardSlash = document.getElementById('forward-slash');
    let developmentIconAnimationLengthOpacity = -(developmentIconWrapperOffsetTop - scrollTop)/100;

    openingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
    closingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
    forwardSlash.style.opacity = developmentIconAnimationLengthOpacity.toString();


  }
  developmentIconAnimationTrigger(developmentIconWrapperOffsetTop, scrollTop) {
    let developmentIconAnimationLengthOpacity = -(developmentIconWrapperOffsetTop - scrollTop)/100;

    let openingBracket = document.getElementById('opening-bracket');
    let closingBracket = document.getElementById('closing-bracket');
    let forwardSlash = document.getElementById('forward-slash');
    openingBracket.style.fill = '#49bde5';
    closingBracket.style.fill = '#49bde5';
    forwardSlash.style.fill = '#49bde5';
    openingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
    closingBracket.style.opacity = developmentIconAnimationLengthOpacity.toString();
    forwardSlash.style.opacity = developmentIconAnimationLengthOpacity.toString();

  }

  // Instructing Icon
  instructinIconAnimationRelease(instructingIconWrapperOffsetTop, scrollTop) {
    let instructor =  document.getElementById('instructor');
    let instructorAnimationLength = -(instructingIconWrapperOffsetTop - scrollTop)/1.3;
    instructor.style.fill = "#D8CCA8";
    instructor.style.opacity = instructorAnimationLength.toString();

    // I need to calculate the distance from the SVGs to the top of the services element.

  }
  instructinIconAnimationTrigger(instructingIconWrapperOffsetTop, scrollTop) {
    let instructor =  document.getElementById('instructor');
    let instructorAnimationLength = -(instructingIconWrapperOffsetTop - scrollTop)/100;
    instructor.style.fill = "#49bde5";
    instructor.style.opacity = instructorAnimationLength.toString();
  }

  // Yin-Yang Icon
  yinYangRotateAnimationRelease(yinYangWrapperOffsetTop, scrollTop) {
    // Yang = Black
    // Yin = Green
    let yang = document.getElementById("yang");
    let yin = document.getElementById("yin");
    let yinYangWrapper = document.getElementById("yin-yang-wrapper");

     // 0 to 150
    //  yang.style.transform = "translate(0px, 167px)";
    //  // 612 to 462
    //  yin.style.transform = "translate(612px, 167px)";
     yinYangWrapper.style.transformOrigin = "525px 525px"

  }
  yinYangRotateAnimationTrigger(yinYangWrapperOffsetTop, scrollTop) {
    // Yang = Black
    // Yin = Green
    let yang = document.getElementById("yang");
    let yin = document.getElementById("yin");
    let yinYangWrapper = document.getElementById("yin-yang-wrapper")
    let yingYangRotationSpeed =  ((yinYangWrapperOffsetTop - scrollTop) / 4.33);
    console.log('Yin Yang Animation Measure: ');
    yinYangWrapper.style.transform = "rotateZ(" + yingYangRotationSpeed + "deg)";
  }

  getBlogs() {
    this.blogServiceSub = this.blogService.getLatestBlogPosts().subscribe(
      data => {
        // console.log(data);
        this.latestBlogs = data.reverse();
        for (let i = 0; i < this.latestBlogs.length; i++) {
          this.latestBlogs[i].date = format(parseISO(this.latestBlogs[i].date), 'MMMM do, uu');
        }
        return;
      }
    );
  }
  getProjects() {
    this.projectServiceSub = this.projectService.getLatestProjectPosts().subscribe(
      data => {
        // console.log(data);
        this.latestProjects = data;
      }
    );

  }
  donatePage() {
    this.router.navigateByUrl('/donate');
  }
  contactPage() {
    this.router.navigateByUrl('/contact');
  }
  viewBlogPage() {

  }
  viewProjectPage(url) {
    console.log(url);
  }


  @HostListener('unloaded')
  ngOnDestroy() {
  this.projectServiceSub.unsubscribe();
  this.blogServiceSub.unsubscribe();
  console.log('Home Page destroyed');
}

}
