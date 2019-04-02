# scrapester

### What is scrapester?
Scrapester is an API that gathers data on any given webpage in a flexible manner depending on what you specifiy in your request. For example, say you want to gather all images from a specific page and filter which ones are saved, with Scrapester you can do so and your images will be saved to an s3 bucket for later access or sharing. Any request made has the optional ability to be saved.  <hr />
Scrapester has just been started so a lot of these features are not available yet, but I will list the features below that you can expect to see.
 
### Features
1. Save any result to for later access and sharing
2. Gather dynamic information on any webpage with optional built in analytics to add to your query result
3. 500 free requests per day with an optional save (saved requests will expire and be archived in 15 days, but you will be able to access and restore them if you purchase a subscription)
<hr />

### Setting up your dev environment

Make sure you have MongoDB installed locally, <a href="https://docs.mongodb.com/manual/installation/">here</a> is the link to the docs for installation
1) Start MongoDB client
```sudo service mongod start```
2) Open Mongo shell
```mongo```
3) Create local database from Mongo shell
``` use scrapester ```  
4) CD into project directory and run ```npm run dev```

Database wont show locally until you insert a document, this is fine, it will automatically populate once you make a post request. I recommend using Postman testing.
