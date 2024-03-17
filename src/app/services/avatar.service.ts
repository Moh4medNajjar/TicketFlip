import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { ref, Storage, uploadString } from '@angular/fire/storage';
import { Photo } from '@capacitor/camera';
import { setDoc } from 'firebase/firestore';
import { getDownloadURL } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(private auth: Auth, private firestore: Firestore, private storage: Storage) { }

  getUserProfile(){
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user?.uid}`);
    return docData(userDocRef, {idField: 'id'});
  }

  async uploadImage(cameraFile: Photo){
    const user = this.auth.currentUser;
    const path = `uploads/${user?.uid}/profile.webp`;
    const storageRef = ref(this.storage, path);

    try {
      await uploadString(storageRef, cameraFile.base64String+'', 'base64');
      const imageUrl = await getDownloadURL(storageRef);
      const userDocRef = doc (this.firestore, `users/${user?.uid}`);
      await setDoc(userDocRef, {imageUrl});
      return true;
    }
    catch(e){
      return null;
    }
  }
}
