import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { UserService } from '../services/user.service';

@Injectable()
export class UserGuard implements CanActivate {


  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
   }

  canActivate() {
    let identity = this._userService.getIdentity();
    console.log('CanACtivate')
    console.log(identity);
    if(identity){
      return true
    }else{
      this._router.navigate(['/']);
      return false;
    }
  }

}