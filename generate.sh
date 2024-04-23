#!/bin/bash
# set -e  # Stop on error

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

rm -rf ./out
nvm use stable
npm run build
pm2 stop esbg-static

if [ ! -d "./out" ]; then
    echo "Error: ./out directory not found"
    exit 1
fi

pm2 stop "esbg-static"
pm2 delete "esbg-static"
pm2 start server.js --name "esbg-static"

echo "The website is available at http://localhost:1338"

echo "Do you want to update the main website? (y/n)"
read -r answer
if [ "$answer" != "${answer#[Yy]}" ]; then
    rsync -vzr ./out/ esbgbmb@ugawebhosting.uga.edu:/usr/www/prod/esbg.bmb/public_html/
fi
