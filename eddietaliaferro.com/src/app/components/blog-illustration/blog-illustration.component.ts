import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-illustration',
  templateUrl: './blog-illustration.component.html',
  styleUrls: ['./blog-illustration.component.scss'],
})
export class BlogIllustrationComponent implements OnInit {
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
      this.blogLineOne = document.getElementById('blog-line-1');
      this.blogLineTwo = document.getElementById('blog-line-2');
      this.blogLineThree = document.getElementById('blog-line-3');
      this.page = document.getElementById('Page');

      this.blogLineOneLength = this.blogLineOne.getTotalLength();
      this.blogLineTwoLength = this.blogLineTwo.getTotalLength();
      this.blogLineThreeLength = this.blogLineThree.getTotalLength();
    }


  }

}
