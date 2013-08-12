Rio
===

Deploy on heroku
----------------
### Pre requisite
We assume you have an account on [heroku](http://www.heroku.com), [the heroku toolbet](https://toolbelt.heroku.com/) installed and logged in.

### Creating the app
At the root directory of your repo:

    heroku create APPNAME --buildpack https://github.com/stephanmelzer/heroku-buildpack-nodejs-grunt-compass.git

where APPNAME is the name you want to give your app.


### Pushing
To deploy your master branch :

    git push heroku master

To deploy the branch YOURBRANCH :

    git push heroku YOURBRANCH:master
