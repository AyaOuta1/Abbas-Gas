import { Component } from '@angular/core';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {
  username: string = " ";
  comment: string = " " ;
  comments: {
    index: number;
    username: string, comment: string}[] = [];
  isAdmin: boolean = false; // Add this line
  index: any;

  constructor() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments).map((comment: string, index: number) => {
        return {text: comment, index: index};
      });
    }
  }

  addComment() {
    console.log('addComment() called');
    this.comments.push({username: this.username, comment: this.comment, index:this.index});
    this.username = '';
    this.comment = '';
     localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  deleteComment(index : number) {
    console.log('deleteComment() called');
    this.comments.splice(index, 1)
     localStorage.setItem('comments', JSON.stringify(this.comments));
       for (let i = index; i < this.comments.length; i++) {
      this.comments[i].index = i;
    }
  }
  loginAsAdmin() {
  const password = prompt('Please enter the admin password:');
  // Check the password and set isAdmin to true if it matches
  this.isAdmin = (password === '12345');
}
logoutAsAdmin() {
  this.isAdmin = false;
}


}




