# chat-app

a [Sails](http://sailsjs.org) application

对sailsjs自带的websocket进行的一个简单学习，模仿该网站做的demo:http://maangalabs.com/blog/2014/12/04/socket-in-sails/

具体步骤该帖中写得很详细，下面是几个highlights

1. 如何用HTML(assisted with angularjs)而不用JADE/EJS - 把config/routes.js中view部分去掉，这样sailsjs就会serve index.html
2. sailsjs自带的socketio是在/assets/js/dependencies下面
3. .watch和.publishCreate的使用
4. angularjs中filter的使用(ng-repeat="chat in chatList | orderBy:predicate:reverse | limitTo: 15")
