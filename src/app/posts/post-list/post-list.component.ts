import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: 'This is the first post\' content' },
    { title: 'Second Post', content: 'This is the second post\' content' },
    { title: 'Third Post', content: 'This is the third post\' content' }
  ]; 
}
