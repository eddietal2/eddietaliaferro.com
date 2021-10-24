import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-illustration',
  templateUrl: './blog-illustration.component.html',
  styleUrls: ['./blog-illustration.component.scss'],
})
export class BlogIllustrationComponent implements OnInit {
  // turn #path-1 to #path-1000
  // turn linearGradient 4 to 456
  // turn linearGradient 1 to 123
  page;
  pencil;
  blogLineOne;
  blogLineTwo;
  blogLineThree;
  blogLineOneLength;
  blogLineTwoLength;
  blogLineThreeLength
  anim: { start: (duration: any) => void; run: () => void; onFinish: () => void; };

  constructor() { }

  ngOnInit() {

    window.onload = () => {
      // Get Pencil SVG Elements
      console.clear();
      this.pencil = document.getElementById('Pencil');
      this.page = document.getElementById('Page');

      this.blogLineOne = document.getElementById('blog-line-1');
      this.blogLineTwo = document.getElementById('blog-line-2');
      this.blogLineThree = document.getElementById('blog-line-3');

      this.blogLineOneLength = this.blogLineOne.getTotalLength();
      this.blogLineTwoLength = this.blogLineTwo.getTotalLength();
      this.blogLineThreeLength = this.blogLineThree.getTotalLength();

      console.log(this.blogLineOne);
      console.log(this.blogLineOneLength);
      console.log('\n');
      console.log(this.blogLineTwo);
      console.log(this.blogLineTwoLength);
      console.log('\n');
      console.log(this.blogLineThree);
      console.log(this.blogLineThreeLength);


  }
}

}
