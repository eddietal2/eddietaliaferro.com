import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, IonInput, IonSpinner, AlertController } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { BlogService, Blog } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.page.html',
  styleUrls: ['./blogs.page.scss'],
})
export class BlogsPage implements OnInit {
  allBlogs;

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
          this.allBlogs[i].date = format(parseISO(this.allBlogs[i].date), 'MMMM Lo, uu');
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

  visibleToggle(event) {
    let checked = event.detail.checked;
    if(checked === true) {
      console.log('The Blog is Visible');
      this.visibleAlert();
    }
    else if(checked === false) {
      console.log('The Blog is NOT Visible');
    }
    else {
      return Error('There was an error with making toggling the Blogs visibility.')
    }

  }

  async visibleAlert() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: 'Make Blog Visible',
      message: 'Are you sure you want to make this Blog visible?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Yes',
          cssClass: 'alert-delete-button',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
