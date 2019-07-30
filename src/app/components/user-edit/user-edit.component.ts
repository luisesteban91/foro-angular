import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service'
import { global } from '../../services/global' 


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  providers: [
    UserService
  ]
})
export class UserEditComponent implements OnInit {

  public page_title:string;
  public status:string;
  public user:User
  public identity
  public token
  public afuConfig
  public url

  constructor(
    private _router: Router,
    private _route:ActivatedRoute,
    private _userService: UserService
  ) { 
    this.page_title = 'Ajsutes de Usaurio';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getTOKEN()
    this.user = this.identity
    this.url = global.url

    this.afuConfig = {
      multiple: false,
      formatsAllowed: ".jpg, .png",
      maxSize: "50",
      uploadAPI:  {
        url: this.url+'upload-avatar',
        headers: {
          "Authorization" : this.token
        }
      },
      theme: "attachPin",
      hideProgressBar: false,
      hideResetBtn: true,
      hideSelectBtn: false,
      attachPinText: 'sube foto',
      replaceTexts: {
        selectFileBtn: 'Select Files',
        resetBtn: 'Reset',
        uploadBtn: 'Upload',
        dragNDropBox: 'Drag N Drop',
        attachPinBtn: 'Sube tu foto',
        afterUploadMsg_success: 'Successfully Uploaded !',
        afterUploadMsg_error: 'Upload Failed !'
      }
    }
  }

  ngOnInit() {
  }

  avatarUpload(data){
    let data_obj = JSON.parse(data.response);

    this.user.image = data_obj.image
    console.log(this.user);
  }

  onSubmit(){
    this._userService.UPDATE(this.user).subscribe(
      Response => {
        if(!Response.user){
          this.status = 'error'
        }else{
          this.status = 'success'
          localStorage.setItem('identity', JSON.stringify(this.user));
          console.log(this.user);
        }
      },
      error => {
        this.status = 'error'
        console.log(error)
      }
    )
  }

}
