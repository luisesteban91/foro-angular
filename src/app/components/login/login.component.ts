import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    UserService
  ]
})
export class LoginComponent implements OnInit {
  public page_title: string
  public user: User
  public status: String
  public identity: string
  public token

  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute

  ) {
    this.page_title = 'Identificate'
    this.user = new User('','','','','','','ROLE_USER')
   }

  ngOnInit() {
  }

  onSubmit(form){

    //CONSEGUIR OBJETO COMPLETO DEL USAURIO LOGUEADO
    this._userService.SIGNUP(this.user).subscribe(
      Response => {
        if(Response.user && Response.user._id){

          //GUARDAMOS EL USUARIO EN UNA PROPIEDAD
          this.identity = Response.user
          localStorage.setItem('identity', JSON.stringify(this.identity));

          //CONSEGUIR EL TOKEN DEL USUARIO IDENTIFICADO
          this._userService.SIGNUP(this.user,true).subscribe( //el true es para que devuelva los datos
            Response => {
              if(Response.token){
                //GUARDAR EL TOKEN DEL USURIO
                this.token = Response.token;
                localStorage.setItem('token', this.token);

                this.status = 'success'
                this._router.navigate(['/home'])
              }else{  
                this.status = 'error'
                
              }
            },
            error => {
              this.status = 'error'
              console.log(error);
            }
          )
          
        }else{  
          this.status = 'error'
        }
      },
      error => {
        this.status = 'error'
        console.log(error);
      }
    )

  }
}
