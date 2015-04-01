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

###Url Parameters
**Url Parameters** let us use a single Url to match an entire class of routes. For example, instead of

```js
...

app.get('/hi/michael', function(req,res) {
  res.send("Hi, I'm Michael");
});

app.get('/hi/brett', function(req,res) {
  res.send("Hi, I'm Brett");
});

...
```
we can

1. Get rid of all but one of the routes.
2. Change Url `/hi/michael` or `/hi/brett`, to `/hi/:name`.
3. Change `"Hi, I'm PERSON"` to `"Hi, I'm " + req.params.name`.

Doing so should give us something like this:

```js
...

// We use the `:name` Url parameter in
// place of a specific Url. We can name
// the parameter anything we'd like.

app.get('/hi/:name', function(req,res) {

  // All of the Url parameters that we use
  // in our route are accessible through
  // the `req.params` object. Since we called
  // our Url parameter `name`, its value can be
  // accessed by using `req.params.name`.

  res.send("Hi, I'm " + req.params.name);
});

...
```

**Exercise 5:** Add a route `GET /add/:x/:y` that sends back the result of `x + y`. For example, a request to `GET /add/1/5` would send back 6.

**Note:** `req.params.x` and `req.params.y` are strings, we need to turn them into numbers. This can be done using the `Number` function.

