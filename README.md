# Backend

# ESBG-NEXT

This project creates the [ESBG website](https://esbg.bmb.uda.edu) that reads data from a Strapi instance.

## Publishing

- Run `generate.sh` to generate the static site. It will generate a folder called `public` in the current directory.
- Run `publish.sh` to publish the site to the web.


## Troubleshooting

- Clear DNS cache on Mac: `sudo killall -HUP mDNSResponder`