#!/bin/bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

rm -rf ./out
nvm use stable
npm run build
pm2 stop esbg-static

#check if out does not exist show error and exit the script
if [ ! -d "./out" ]; then
    echo "Error: ./out directory not found"
    exit
fi

pm2 start server.js --name "esbg-static"
