import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { Subject } from 'rxjs';

// Makes it available since the root deep into the structure of the app
@Injectable({providedIn:'root'})
export class PostService {
    private posts: Post[] = [];
    private postsUpdated = new Subject<Post[]>();

    getPosts(){
    	return [...this.posts];
    }

    getPostsUpdateListener(){
    	return this.postsUpdated.asObservable();
    }

    addPost(title: string, content: string){
        const post: Post = {title: title, content: content};
        this.posts.push(post);
        this.postsUpdated.next([...this.posts]);
    }
}