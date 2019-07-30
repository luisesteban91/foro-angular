import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Topic } from '../../../models/topic';
import { UserService } from '../../../services/user.service';
import { TopicService} from '../../../services/topic-service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    UserService,
    TopicService
  ]
})
export class ListComponent implements OnInit {

  public page_title: string
  public topics: Array<Topic>
  public identity
  public token
  public status

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _topicService: TopicService
  ) {
    this.page_title = 'Mis Temas'
    this.identity = this._userService.getIdentity()
    this.token = this._userService.getTOKEN();
  }

  ngOnInit() {
    this.getTopic();
  }

  getTopic(){
    var userId = this.identity._id;
    this._topicService.getTopicsByUser(userId).subscribe(
      Response => {
        if(Response.topics){
          this.topics = Response.topics;
        }else{
          this.status = 'error'
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
