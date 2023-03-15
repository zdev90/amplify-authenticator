# install root
echo "Installing Root Application Dependencies"
npm install

# install functions
echo "Installing Function Dependencies"
cd ./packages/functions
npm install

# install authenticator
echo "Installing Authenticator Dependencies"
cd ../../frontend/auth-app
npm install

# install authenticator
echo "Installing Client Example 1 Dependencies"
cd ../../frontend/client-example1
npm install

# install authenticator
echo "Installing Client Example 2 Dependencies"
cd ../../frontend/client-example2
npm install