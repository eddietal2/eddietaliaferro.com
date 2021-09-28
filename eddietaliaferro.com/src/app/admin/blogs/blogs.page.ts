import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController, IonToggle } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit, OnDestroy {
  allBlogs;
  @ViewChild('visibilityToggle') visibilityToggle: IonToggle;

  constructor(
    private router: Router,
    private alert: AlertController,
    private loadingController: LoadingController,
    private blogService: BlogService,
  ) { }

  ngOnInit() {
    this.blogService.getBlogs().subscribe(
      blogs => {
        this.allBlogs = blogs;
        console.log(blogs);
        for (let i = 0; i < this.allBlogs.length; i++) {
          console.log(this.allBlogs[i].date);
          this.allBlogs[i].date = format(parseISO(this.allBlogs[i].date), 'MMMM do, uu');
        }
        return;
      }
    )
  }
  viewBlog() {

  }
  addBlog() {
    this.router.navigateByUrl('/admin/blogs/add-blog')
  }
  async deleteAlert(blogID) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Delete Blog',
      message: 'Are you sure you want to Delete this Blog Post? It cannot be undone.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Delete',
          cssClass: 'alert-delete-button',
          handler: () => {
            console.log(blogID);
            this.blogService.deleteBlog(blogID).subscribe(
              updatedBlogs => {
                this.presentLoading(updatedBlogs);
                this.allBlogs = updatedBlogs;
              }
            )
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss().then(

    );
  }
  async presentLoading(updatedBlogs) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      duration: 1000
    });
   await loading.present();
   await loading.onDidDismiss().then( () => {
      console.log(updatedBlogs);
    }
    )
  }
  editBlog(id) {
    this.router.navigate(['/admin/blogs/edit-blog', id])
  }

  blogComments() {

  }

  visibleToggle(event, blogID, title, visible) {
    console.log(event)
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Blog is Visible');
      this.blogService.blogVisibility(blogID, title, visible)
        .subscribe( data => {
          console.log(data);
        })
    }
    else if(checked === false) {
      console.log('The Blog is NOT Visible');
      this.blogService.blogVisibility(blogID, title, visible)
        .subscribe( data => {
          console.log(data);
        })
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }
  }
  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('Admin Blogs Page destroyed');
  }
}
