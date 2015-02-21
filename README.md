Run and develop Javascript
==

**Pre-usge-requirements:**

* Install Node.js
* Install `sudo npm install -g grunt-cli`
* Change to this directory and type in the first time your are working on this project `npm install`

**To run sonar analysies localy you need to setup a vagrant box**

* Install virtualbox
* Install vagrant
* Clone the repo to your workspace `git clone https://github.com/dave-tucker/sonar-vagrantbox.git`
* cd sonar-vagrantbox
* hit `vagrant up` on the console
* Wait for the provision to finish
* Open "http://localhost:9000" in your favorite browser
* Login in as "username: admin / password: admin"
* Switch url to "http://localhost:9000/updatecenter/available"
* Search under the headline "Languages" => for "Javascript" and install the plugin
* Hereafter you have to restart the virtual maschine (you can do this by entering `vagrant halt` and `vagrant up` on the console or by using the virtualbox gui)
* After all you have to import the sonar-js-profile.xml and activate them. (This profile is optimised for the javascipt coding guideline)

TIPP: If you want to use the sonar vagrant box the next time just switch to the directory on console
and hit `vagrant up` again. Alternately you can use the virtualbox gui.


--------------------
The implemenation currently uses the google javascipt guide line look:
https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml
