# pizza

> Random Domino's pizza generator

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Very Important
This uses a local proxy to get around CORS which isn't enabled for Domino's pizza web service.  If you're getting CORS errors, this is why.

In order to get around that, you can do one of two things:
- Set up a web proxy to point https://order.dominos.com to your local host. If you do this, make sure it only affects browser calls, not all web traffic.
- Go into the file `node_modules/pizzapi/src/urls.json` and manually edit the URLs to point to your local.


## Heads Up!!
If `ncu` is run or if node modules are updated, make sure to update the urls.json in the dominos pizza api to point to local
Yeah, this is bad, but the only clean way would be to support the API directly in this

## TODO
- proper failure handlers for API calls
- improve styles
- use button click rather than select onchange to create the order
