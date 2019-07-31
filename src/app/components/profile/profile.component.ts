import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { UserService } from '../../services/user.service'
import { TopicService } from '../../services/topic-service'
import { User } from '../../models/user';
import { Topic } from '../../models/topic';
import { global } from '../../services/global' 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[
    UserService, TopicService
  ]
})
export class ProfileComponent implements OnInit {

  public page_title:string
  public user: User
  public topics: Topic[]
  public url:string

  constructor( private _userService: UserService,
    private _topicService: TopicService,
    private _router:Router,
    private _route: ActivatedRoute
    
    ) {
    this.url = global.url
   }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var userId = params['id']
      
      this.getUser(userId);
      this.getTopic(userId);
    })
    
  }

  getUser(userId){
    this._userService.getUser(userId).subscribe(
      Response => {
        if(Response.user){
          this.user = Response.user;
        }else{
          
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  getTopic(userId){
    this._topicService.getTopicsByUser(userId).subscribe(
      Response => {
        if(Response.topics){
          this.topics = Response.topics;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
