import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-blog',
  templateUrl: './display-blog.component.html',
  //  styleUrls: ['./display-blog.component.css']
})
export class DisplayBlogComponent implements OnInit {
  content: string;
  limit: number = 30;
  fetch: string;
  completeWords = "true";
  contarr: string[] = new Array();


  isContentToggled: boolean;
  nonEditedContent: string;
  $posts: Observable<any>
  posts: any;
  url: string = 'https://public-api.wordpress.com/rest/v1.1/sites/yomefoodsblog.wordpress.com/posts/?context=display&pretty=true'
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPosts();



    //   this.content = this.formatContent(this.content);
  }


  getPosts() {
    this.$posts = this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/yomefoodsblog.wordpress.com/posts/?context=display&pretty=true')
    this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/yomefoodsblog.wordpress.com/posts/?context=display&pretty=true')
      .subscribe(Response => {
        this.posts = Response;
      })


  }
  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    for (let i = 0; i < 6; i++) {
      this.contarr[i] = this.isContentToggled
        ? this.nonEditedContent
        : this.formatContent(this.content);
    }
  }
  formatContent(content: string) {
    if (this.completeWords) {
      this.limit = content.substr(0, this.limit).lastIndexOf(" ");
    }

    return `${content.substr(0, this.limit)}...`;

  }
  click() {
    for (let i = 0; i < 6; i++) {
      this.contarr[i] = this.posts.posts[i].content
      console.log(i + "count")
      console.log(this.contarr[i] + "get")


    }

    this.content = this.posts.posts[0].content
    // this.nonEditedContent = this.content;
    for (let i = 0; i < 6; i++) {
      this.nonEditedContent = this.contarr[i];
      this.contarr[i] = this.formatContent(this.content);
      this.isContentToggled = !this.isContentToggled;
      this.formatContent(this.content);
    }


  }

}
