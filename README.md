# Create a Calculator Using Routes in Express

First, you'll want to create an index page that uses the root 'route' that explains to a user how to add/subtract/multiply/divide.

Something like:
```js
app.get('/', function(req, res) {
   res.send("") // Your HTML would go here. 
});
```

Next, you'll want to create 4 additional routes for the calculator functions.You'll need one for adding, another for subtracting, and two more for multiplying and dividing. We hope you'll be able to figure out how to structure these routes, but if you have trouble, send us a message on Slack!

Make sure to use named URL parameters like what we did [in class this afternoon for Exercises 3-5]( ../../../lectures/week-03/_1_monday/dusk/README.md). We'd probably call those params `:x` and `:y`, but you can call them anything you want. After all, you're the developer and you're in control!

**Exercise 3:** Add a new route `GET /hi/YOURNAME` that sends back an html string that has an h1 tag that says 'Hi, I'm YOURNAME'. Do this for each member of your group.

**Excercise 4:** Reflecting on **Exercise 3**, how would we add routes for every one in this class? Continuing on that thought, how would we add routes for arbitrarily many people?


