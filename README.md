# Install Firebase
1) npm install firebase@8.5
2) npm install -g firebase-tools
3) firebase init   

select blow with press space

1) Firestore: Configure security rules and indexes files for Firestore
2)  Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
3)  Storage: Configure a security rules file for Cloud Storage
4) [enter]
5) Use an existing project 
6) react-project-management-5516d (react-project-management) 
7) What file should be used for Firestore Rules? (firestore.rules) 
8) What file should be used for Firestore indexes? (firestore.indexes.json) 
9) What do you want to use as your public directory? build   
10) Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y   
11) Set up automatic builds and deploys with GitHub? (y/N) n


# Deploy
1) firebase deploy --only firestore
2) npm run build
3) firebase deploy