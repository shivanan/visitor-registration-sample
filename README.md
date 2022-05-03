# Sample Visitor Registration Screen

## Development

```
npm install
npm run dev
```

Then go to http://localhost:8080/?id=mobile-ui



## Uploading to Lucy

```
npx lucy-xp upload ./dist/main.js ./bundle.json --lucy-url https://<lucyaccounturl> --lucy-apikey "<lucy api key>"
```

You can get your API Key by going to the Lucy dashboard and then Settings -> API Key

Once in Lucy, you can access using https://<lucyurl>/Apps/UXP/ui/mobile-ui

## Docs

More information here:
[http://lucyinthesky.io/docs-experience-portal](http://lucyinthesky.io/docs-experience-portal)
