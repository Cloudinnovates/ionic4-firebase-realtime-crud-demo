# ionic4-firebase-realtime-crud-demo
## Starter: Ionic 4 Firebase Realtime CRUD demo with email authentication login and social login

## Get your google firebase credentials, from firebase console (web setup)
```
const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: ""
};
```
## To Do (Work in Progress)
- Login
- Social Login

## This demo is using Firebase web sdk and not AngularFire
```
import * as firebase from 'firebase';
```

## Set Firebase console rules only for this demo local testing (not recommended for production)
```
{
  "rules": {
    ".read": "true",
    ".write": "true"
      
  }   
}
```

## For production below example should be followed with extra rules as defined by Firebase docs (https://firebase.google.com/docs/database/security/)

```
".read": "auth != null",
".write": "auth != null",
```
