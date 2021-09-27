import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { Blog, BlogService } from './blog.service';
import { environment } from 'src/environments/environment';

describe('BlogService', () => {
  let httpTestingController: HttpTestingController;
  let service: BlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BlogService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getBlogs should return expected data', () => {
    const expectedData: Blog[] = [
      {
        title: 'Test Blog',
        hashtags: [
          'blog', 'pwa', 'javascript'
        ],
        thumbnail: 'thumbail url',
        post: 'Lorem Ipsum stuff',
        comments: []
      }
    ]
  service.getBlogs().subscribe(data => {
    expect(data).toEqual(expectedData);
  });

  const testRequest = httpTestingController.expectOne(environment.url + '/blog/get-blog-posts');

  testRequest.flush(expectedData);
  });

  it('#getBlogs should be using GET to retrive data', () => {
    service.getBlogs().subscribe();
    const testRequest = httpTestingController.expectOne(environment.url + '/blog/get-blog-posts');
    expect(testRequest.request.method).toEqual('GET');
  })

  it('#getBlogs should return an empty object on error', () => {
    const expectedData: Blog[] = [];

    service.getBlogs().subscribe(blogs => {
      expect(blogs).toEqual(expectedData);
    });

    const testRequest = httpTestingController.expectOne(environment.url + '/blog/get-blog-posts');

    testRequest.flush('error', {status: 500, statusText: 'Broken Service'});

  });
});
