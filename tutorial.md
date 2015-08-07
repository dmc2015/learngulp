Let's start off by starting up node's npm, gulp runs on top of node after all and as we will see shortly we utilize npm commands to install gulp along with
glup plugins.

With in the project folder run this command on the command line:

'npm init'

This will create the node_modules/ and the package.json

ProTip: if your utilizing git be sure sure to add a .gitignore to your project folder or your end up having to commit all of the node_modules which you don't really need
on git. The package.json is capable of installing all of your node dependencies, if someone were to clone your repo they would only need to perform a 'npm install' with in the cloned directory to install all node dependencies.

'npm install gulp -g'

will install gulp globally on the system


'npm install gulp gulp-* --save-dev'

install gulp and plugins into the project, this will save to the package.json


Recommendations
-convert sass to css and ccs back to sass by hand
-code the this tutorial by hand instead of just copying to get extra practice
-check out other gulp tutorials
-read the gulp documentation
