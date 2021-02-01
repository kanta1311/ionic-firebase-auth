import { Component } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private firebaseAuthentication: FirebaseAuthentication) {}

  emailLogin(){
    this.firebaseAuthentication.createUserWithEmailAndPassword('test@gmail.com', '123')
    .then((res: any) => console.log(res))
    .catch((error: any) => console.error(error));
  }

}
