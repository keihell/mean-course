import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { Post } from '../post.model';

@Component({
    selector: 'app-post-create',
	templateUrl: './post-create.component.html',
	styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent{
    enteredTitle = "";
    eneteredContent = "";
    @Output() postCreated = new EventEmitter<Post>();

	onAddPost(form: NgForm){
        if(form.invalid){
		    return;
	    }

		const post: Post = {title: form.value.title, content: form.value.content};
		this.postCreated.emit(post);
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