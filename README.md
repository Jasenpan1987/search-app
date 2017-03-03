## Search App

### Use Cases:
This is a simple search app, you can type a keyword and a url (please do not use second level domain name, such as http://docs.github.com) and click the "GO" button. The app will search your keywords on google.com and then try to match the top 100 results against your url. If matches, it will give you the index of the url.

For instance: 

    keywords: "hello world"
    url: www.helloworld.com

After you click GO, let's say google gives you back such a list:

(0) www.helloworld.com          
(1) www.helloworld.com/foo      
(2) www.foo.com                 
(3) www.bar.com                 
(4) www.foo.helloworld.com      

The result will be 0, 1, 4, since they matches the url you have given.

### How to run:

First, please make sure you have the version 7.x+ nodejs running on your machine, or go to https://nodejs.org/en/ to download.

#### Development
- For development purpose, firstly run
```
npm run dev:client
```
- And then on another terminal or command prompt run
```
npm run dev:server
```

### Build
```
npm run build
```

### Deploy
```
npm run deploy
```