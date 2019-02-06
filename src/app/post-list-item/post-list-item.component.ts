import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle;
  @Input() postContent;
  @Input() postLoveIts;
  @Input() postCreated_at;

  constructor() { 
    
  }

  ngOnInit() {
  }

  onLove(){
    this.postLoveIts +=1;
  }

  onDontLove(){
    this.postLoveIts -=1;
  }

}
