import { Component, Input } from '@angular/core';

import { Post } from '../post.model';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent{
//    posts = [
//      { title: 'First Post', content: "This is the content"},
//      { title: 'Second Post', content: "This is the content"},
//      { title: 'Third Post', content: "This is the content"},
//    ];
    @Input() posts: Post[] = [];
}