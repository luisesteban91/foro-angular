import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic-service';
import { UserService} from '../../services/user.service'
import { CoomentService} from '../../services/comment.service'
import { Comment } from '../../models/comment';
import { global } from '../../services/global'


@Component({
  selector: 'app-topics-detail',
  templateUrl: './topics-detail.component.html',
  styleUrls: ['./topics-detail.component.css'],
  providers: [
    TopicService, UserService, CoomentService
  ]
})
export class TopicsDetailComponent implements OnInit {

  public topic: Topic
  public comment:Comment
  public identity
  public token
  public status
  public url



  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _topicService: TopicService,
    private _userService: UserService,
    private _commentService: CoomentService
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getTOKEN();
    this.comment = new Comment('','','',this.identity._id)
    this.url = global.url
  }


  ngOnInit() {
    this.getTopic();
  }

  getTopic(){
    this._route.params.subscribe(params =>{
      let id = params['id']

      this._topicService.getTopic(id).subscribe(
        Response => {
          if(Response.topic){
            this.topic = Response.topic
  
          }else{
            this._router.navigate(['/home'])
          }
        },
        error => {
          console.log(error)
        }
      )

    })

    
  }

  onSubmit(form){
    this._commentService.addComment(this.token, this.comment, this.topic._id).subscribe(
      Response => {
        if(!Response.topic){
          this.status = 'error'
        }else{
          this.status = 'success'
          this.topic = Response.topic
          form.reset();
        }
      },
      error => {
        this.status = 'error'
        console.log(error);
      }
    )
  }

  deleteComment(id){
    this._commentService.deleteTopic(this.token, this.topic._id, id).subscribe(
      Response => {
        if(!Response.topic){
          this.status = 'error'
        }else{
          this.status = 'success'
          this.topic = Response.topic
        }
      },
      error => {
        this.status = 'error'
        console.log(error);
      }
    )
  }
}
