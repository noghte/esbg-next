#!/bin/bash
# set -e  # Stop on error
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
git pull
rm -rf ./out
mkdir -p ./out/images
nvm use stable
npm run build
pm2 stop esbg-static

pm2 stop "esbg-static"
pm2 delete "esbg-static"
pm2 start server.js --name "esbg-static"

echo "The website is available at http://172.22.150.99:1338"

echo "Do you want to update the main website? (y/n)"
read -r answer
if [ "$answer" != "${answer#[Yy]}" ]; then
    # rsync -vzr ./out/ esbgbmb@ugawebhosting.uga.edu:/usr/www/prod/esbg.bmb/public_html/
    cp -r ./out/* ~/workspace/esbgkannan.github.io
    echo "Navigate to the ~/workspace/esbgkannan.github.io and run 1. git add . 2. git commit 3. git push"
fi
