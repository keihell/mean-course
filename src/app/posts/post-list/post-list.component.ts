import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
	selector: 'app-post-list',
	templateUrl: './post-list.component.html',
	styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy{
    posts: Post[] = [];
    private postsSub: Subscription;

    // Creates a public attribute 'postService' at the moment of creation of PostListComponent object.
    constructor(public postService: PostService){}

    // Required by the OnInit implementation, to initialize the component.
    ngOnInit(){
    	this.posts = this.postService.getPosts();
    	this.postsSub = this.postService.getPostsUpdateListener().subscribe((posts: Post[]) => {
            this.posts = posts;
    	});
    }

    ngOnDestroy(){
        this.postsSub.unsubscribe();
    }
}