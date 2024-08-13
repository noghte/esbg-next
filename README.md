# Backend

# ESBG-NEXT

This project creates the [ESBG website](https://esbg.bmb.uda.edu) that reads data from a Strapi instance.
Run:
- First, start the strapi. (`cd ~/workspace/esbg-strapi` then `dev.sh` to edit data, or `prod.sh` to start instance in readonly mode.)
- Then, `npm run dev` in this project's root directory. (or, debug with vscode by selecting Run script: dev")

Note: If new data is added (including images in Person or News), you should run `generate.sh` as described below. Downloading images (by running `download-images.js`) is a part of this script.

## Publishing

- Run `generate.sh` to generate the static site. It will generate a folder called `public` in the current directory and launches a local website at `http://172.22.150.99:1338/`
    - If `y` selected, then the contents of the static website will be copied to `~/workspace/esbgkannan.github.io`


## Troubleshooting

- Clear DNS cache on Mac: `sudo killall -HUP mDNSResponder`