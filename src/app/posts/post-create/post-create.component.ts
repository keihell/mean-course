import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { PostService } from '../post.service';

@Component({
    selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    enteredTitle = "";
    eneteredContent = "";

    constructor(public postService: PostService){}

	onAddPost(form: NgForm){
        if(form.invalid){
		    return;
	    }

		this.postService.addPost(form.value.title, form.value.content);

		form.reset();
	}

	getTitleErrorMessage(title: NgModel){
		if (title.hasError('required')) {
            return 'Please enter a post title';
        }

        return title.hasError('minlength') ? 'Length must be greater than 3 characters' : '';
	}

	getContentErrorMessage(content: NgModel){
		if (content.hasError('required')) {
            return 'Please enter a post content';
        }
	}
}