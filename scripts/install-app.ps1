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

cd ../../