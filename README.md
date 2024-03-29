# Backend

# ESBG Strapi

Installed on https://esbg.lunovid.com

To reinstall or debug:
    - Follow this [documentaion](https://www.digitalocean.com/community/tutorials/how-to-set-up-and-install-strapi-for-production-on-ubuntu-22-04)
    - In the website diretory, run `NODE_ENV=production npm run build` to build the app
    - To start the app in development (necessary for adding content types): `yarn develop`
    - To start the app in production: `pm2 start npm --name "strapi" -- start`
    - To see the status: `pm2 status`


## Domain configurations

Look at `nginx-esbg.lunovid.com.j2` and `www-esbg.lunovid.com.yaml` in the private repository.

## Running on the Server
- 
# Frontend
## Directory Structure

- `app`: the root directory
- `app/components`: all the components
- `app/news`: News page
- `app/publications`: Publications page
- `app/join`: Join us page
- `data`: all the data in json format
- `publish.sh`: to publish the website

## Architecture

In `vscode`, install the `drawio` extension and open the `architecture.drawio` file.

## Update contents

- Edit the markdown files you want to modify.
- Run `./publish.sh`

## Full Installation (one time - for local development)
1. Install `nvm`. 
    1. On Linux, to install `nvm`, you can run: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
    2. Close and reopen your terminal
    3. Verify it is installed by running `command -v nvm`. If it outputs `nvm`, it means it is installed.
1. Install `node` by running this command: `nvm install v18.19.0`.
    - To verify, run `node --version`. It should show `v18.19.0`.
   
1. In the `esbg-nextjs` directory:
    - run install npm packages by running `npm install`.
    - launch the website by running `npm run dev`.

## Troubleshooting

- Clear DNS cache on Mac: `sudo killall -HUP mDNSResponder`