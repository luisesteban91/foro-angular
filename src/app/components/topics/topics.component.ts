import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Topic } from '../../models/topic';
import { TopicService } from '../../services/topic-service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [
    TopicService
  ]
})
export class TopicsComponent implements OnInit {

  public page_title:string
  public topics: Topic[]
  public totalPages
  public page
  public next_page
  public prev_page
  public number_pages

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _topicService: TopicService
  ) { 
    this.page_title = 'Temas'
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      var page = +params['page'];

      if(!page || page == null || page == undefined){
        page = 1
        this.prev_page = 1
        this.next_page = 1
      }
      this.getTopics(page);
    })
  }

  getTopics(page = 1){
    this._topicService.getTopics(page).subscribe(
      Response => {
        if(Response.topics){
          this.topics = Response.topics

          //NAvegaion de Paginacion
          this.totalPages = Response.totalPages
          
          //RELLENAR UN ARRAY CON CADA NUEMRO DE LAS PAGINAS
          var number_pages = []
          for(var i = 1 ; i <= this.totalPages; i++){
            number_pages.push(i);
          }

          this.number_pages = number_pages

          console.log(this.number_pages)

          if(page >= 2){
            this.prev_page = page-1
          }else{
            this.prev_page = 1
          }
          
          if(page < this.totalPages){
            this.next_page = page+1
          }else{
            this.next_page = this.totalPages;
          }


        }else{
          this._router.navigate(['/home'])
        }
      },
      error => {
        console.log(error)
      }
    )
  }
}
