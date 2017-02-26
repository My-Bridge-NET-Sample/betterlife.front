# 欢迎来到 Betterlife.Front 框架

    下载地址：https://github.com/skygreen2001/betterlife.front

## 简介说明

    框架目标定义分为三部分:
    * Html5开发生成Native原生应用[ios,andriod]
      - NativeScript    [Angular + Typescript + Javascript]
      - React Native [React + Javascript]

    * 专用于移动APP开发的html5 UI界面，可发布成原生应用[ios,andriod],也可用于html5 web页面；可嵌入微信；手机端优先。
      实现框架底层采用:
          - Angular1 + Angular Material
          - React    + React Material
          - Angular2 + Ionic  | Angular Material [ 尚待验证 ]

    * 专用于Web开发的html5自适应界面，可用于pc电脑端，也可用于嵌入原生应用的[ios,andriod]的html5页面；可嵌入微信；Pc Web端优先。
          - Jquery + Bootstrap  [前后台] [ IE9 +  ]
          - Jquery + Semantic-Ui[后台]   [ IE11 + ]
          - Angular1 + Angular Material  [ IE11 + ]
          - Angular2 + Angular Material  [ 尚待验证 ]

## 准备工作

* **安装git工具**

    百度或者谷歌下载Git和图形化Git GUI工具

* **通过Github官网下载**

    官网地址: https://github.com/skygreen2001/betterlife.front
    * git clone https://github.com/skygreen2001/betterlife.front
    * git clone git@github.com:skygreen2001/betterlife.front.git


* **安装NodeJs**

    下载地址: https://nodejs.org/en/download/

* **安装目录下运行**

    npm install

    [说明]:安装目录是根目录下的src目录, 即本说明文件目录下


* **安装目录下运行**

    gulp

        [说明]:
            Windows操作系统下推荐安装Cmder[http://cmder.net/]
            Window操作系统下需先运行: npm install --global gulp
            然后运行gulp

* **安装开发工具 IDE**

    Atom: https://atom.io/

    推荐安装Package:
        apm install bottom-dock gulp-manager atom-beautify git-plus atom-bootstrap3 atom-terminal-panel
        * bottom-dock
        * gulp-manager
        * atom-beautify
        * git-plus
        * atom-bootstrap3
        * atom-terminal-panel

* **使用JS框架**

    AngularJS | JQuery | React [todo]


## 框架目录定义

    * src     :框架核心支持文件目录
    * src/less:框架css源文件目录
    * src/js  :框架js源文件目录
    * src/js/base :Javascript基本函数库文件目录
    * src/template:框架模版文件目录
    * src/html    :框架web网页文件目录
    * www         :发布在线Web访问目录


## 学习资料

    0⃣️

    道

        * Code Guide     : http://alloyteam.github.io/CodeGuide/
        * Material Design: https://material.io/
        * Bootstrap      : http://getbootstrap.com/
        * FIS            : https://github.com/fis-dev/fis
        * WEEX           : http://weex.incubator.apache.org/

    🅰️

    Angular 1.*

        * AngularJS 官方教程:https://docs.angularjs.org/tutorial
        * Angular Material :https://material.angularjs.org
          [无table]
            -. https://github.com/daniel-nagy/md-data-table
            -. https://github.com/esvit/ng-table

        * Think in AngularJS:http://www.angularjs.cn/A0bz
        * AngularJS 初识    :https://docs.angularjs.org/guide/concepts
        * AngularJS 教程    :http://www.runoob.com/angularjs/angularjs-tutorial.html

        * Mobile Angular Js:http://mobileangularui.com/
        * Ionic :http://ionicframework.com/
        * Onsen UI:https://onsen.io/
        
        * Native Javascript: https://www.nativescript.org/
        * TypeScript       : http://www.typescriptlang.org/

    Angular 2.*

        * Angular 中文: https://angular.cn/
        * 大道至简：Angular2只有一个核心概念: http://www.angularjs.cn/A2Ar

    🅱

    React

        * React 官方网站 : https://facebook.github.io/react/
        * Material-UI设计: http://www.material-ui.com/
        * React 入门教程 : https://hulufei.gitbooks.io/react-tutorial/content/introduction.html
        * Reactive Native: http://facebook.github.io/react-native/

    ☕

        * Dart             : http://www.dartlang.org/

    Customize IDE:
        Electron:Build cross platform desktop apps with JavaScript, HTML, and CSS
            http://electron.atom.io/

        Orion   :https://orionhub.org/

    框架对比
        * More Benchmarks: Virtual DOM vs Angular 1 & 2 vs Others:
          https://auth0.com/blog/more-benchmarks-virtual-dom-vs-angular-12-vs-mithril-js-vs-the-rest/

        * Angular Material vs Semantic-Ui vs Bootstrap vs Foundation vs materialize
          https://medium.com/@thatisuday/angular-material-vs-semantic-ui-vs-bootstrap-vs-foundation-vs-materialize-8bd3646e6f0a#.1f9d86xwj

    其它
        给 Web 开发者的 25 款最有用的 AngularJS 工具: http://www.oschina.net/news/60200/bestl-angularjs-tools
        Web Uploader: http://fex.baidu.com/webuploader/
