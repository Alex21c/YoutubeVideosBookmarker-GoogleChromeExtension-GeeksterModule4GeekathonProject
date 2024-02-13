# Youtube Videos Bookmarker || Google Chrome Extension || Geekster Module #4 Geekathon Project
![](Screenshots/posterImage.png)

## 1. Developer
[Abhishek kumar](https://www.linkedin.com/in/alex21c/), ([Geekster](https://geekster.in/) MERN Stack FS-14 Batch) || Team-12

## 2. Mentor
[Trisha Das](https://www.linkedin.com/in/trisha-das1308/)

## 3. Objectives:
+ Developing a chrome extension.
- Creating the UI of extension & Implement the chrome extension, on the browser.

## 4. Introduction : Bookmark YouTube Videos
This extension will help you to bookmark yours youtube videos by saving video timeline intervals and allows you to jump to specific timeline interval for that particular video, helpful for resuming video you added to watch later or making important notes for the lectures you're watching or bookmarking the begining of yours favourite songs!

## 5. Learnings
+ How to develop the User Interface for the chrome extension and link it with the browser 
+ Concept of Web Workers for creating chrome extension, How web worker & content scripts commuicate together using chrome.runtime.onMessage && chrome.tabs.onMessage
+ Use the chrome.tabs API to interact with the browser's tab system
+ Using chromeScriptingAPI for Injecting contents scripts to modify any webpage DOM
+ Using chrome.stoageAPI.sync to synchronize data across all devices where the user is signed in to Chrome and has the extension installed, using set and get methods of it
+ Asynchronous programming using promises, and trust me there are lots of promises being used for developing the chrome extension
+ Browser Extension Architecture: Gained an understanding of how browser extensions work, including their components, manifest files, and permissions.
+ Chrome Extension APIs: Explore the various Chrome Extension APIs, such as storage, tabs, messaging, and notifications, for building different features within the extension.
+ Content Scripts: Learn to inject and interact with content scripts in web pages, allowing the extension to modify and enhance web content.

## 6. MVC Diagram
![](MVC/MVCDiagram.png)

## 7. Tech Stack Used
+ [Google chrome StorageAPI](https://developer.chrome.com/docs/extensions/reference/api/storage)
+ [Google chrome ScriptingAPI](https://developer.chrome.com/docs/extensions/reference/api/scripting)
+ [Google chrome NativeMessagingAPI](https://developer.chrome.com/docs/extensions/reference/api/tabs)
+ [Google chrome RuntimeAPI](https://developer.chrome.com/docs/extensions/reference/api/runtime)
+ [HTML5](https://en.wikipedia.org/wiki/HTML5)
+ [CSS3](https://en.wikipedia.org/wiki/CSS)
+ [Tailwind CSS](https://tailwindcss.com/)
+ [JavaScript ES6](https://en.wikipedia.org/wiki/JavaScript)
+ [Font Awesome](https://fontawesome.com/icons)
+ [Google Fonts](https://fonts.google.com/)
+ [Git](https://en.wikipedia.org/wiki/Git)
+ [GitHub](https://github.com/)
+ [VS Code](https://code.visualstudio.com/)


## 8. ScreenShots
![](Screenshots/1-non-youtube-website.png)
![](Screenshots/2.addBookmarkControl.png)
![](Screenshots/3.ExtensionWithBookmarks.png)


## 9. How to set up the development environment on yours local machine
### 1.1 Installation (npm will automatically downlaod and install the required dependencies from package.json)
```bash
git clone https://github.com/Alex21c/YoutubeVideosBookmarker-GoogleChromeExtension-GeeksterModule4GeekathonProject.git 
npm install 
```

### 1.2 Run 
```bash
npm run start
```

## 10. For Installing this extension directly on Google chrome
+ Just Import the manifest.json file/Directory into google chrome load unpacked extensions and it will be installed on yours Google Chrome