# Google+ Auth - Ionic Implementation
 
As I wanted to integrate Google+ Auth in one my project, I started searching out documentation and tutorials for Google+ Auth Ionic Implementation. Unfortunately there is no proper documentation or tutorial to guide integration properly. Since I dont want any one to waste time on google, I made a small standalone implementation

If you want to integrate on existing Ionic App , use this command to retrive the SHA-1 KEY

  `keytool -exportcert -keystore D:\Personal\ionic-google-auth\gauth.keystore -list -v`
  
Here `D:\Personal\ionic-google-auth\gauth.keystore` is path to my APK 

If you want to integrate on a new project, make sure you always test with signed APK , use the following command to generate SIGNED CERTIFICATE

 `keytool -genkey -v -keystore gauth.keystore -alias gauth -keyalg RSA -keysize 2048 -validity 100000`
 

 With SHA-1 KEY Obtained from the previous step , navigate to https://console.developers.google.com/apis/dashboard and enable `Google+ API
` 

Next move is to create credentials , https://console.developers.google.com/apis/credentials

Click on `Create Credentials` to create a OAuth Client ID . Use the retrived `SHA-1 signing-certificate fingerprint` and your `package name` in config.xml to complete the step

![](https://github.com/VivekanandanS/ionic-google-auth/blob/master/src/assets/imgs/googel.png)

Once you completed this you'll get client ID, now you can process to ionic implementation.

`ionic cordova plugin add cordova-plugin-googleplus --save --variable REVERSED_CLIENT_ID=myreversedclientid `

If you are building a hybrid application (iOS and Android), or an Android application, you have to replace myreversedclientid with the reverse value of Client ID in your Release credential generated , on Google Developer's Console, this will be: "com.googleusercontent.apps.uniqueId", without quotes. Example: '123-abc123.apps.googleusercontent.com' becomes 'com.googleusercontent.apps.123-abc123'.

Now all its done, play with your code . Make sure you always build and test with signed apk. So that you dont need to update SHA-1 Certificate of your APK everytime in the console



Mapwize Venue View             |  List of Places in Venue
:-------------------------:|:-------------------------:
![](https://github.com/VivekanandanS/ionic-google-auth/blob/master/src/assets/imgs/1.png)  |  ![](https://github.com/VivekanandanS/ionic-google-auth/blob/master/src/assets/imgs/2.png)

Start Place            |  Swapped Place
:-------------------------:|:-------------------------:
![](https://github.com/VivekanandanS/ionic-google-auth/blob/master/src/assets/imgs/3.png)  |  ![](https://github.com/VivekanandanS/ionic-google-auth/blob/master/src/assets/imgs/4.png)


