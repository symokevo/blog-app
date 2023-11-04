import { Component } from "@angular/core"; 

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create-component.scss']
})
export class PostCreateComponent {
    enteredValue = '';
    newPost = 'The starting text';

    onAddPost() {
        this.newPost = this.enteredValue;
    }
}