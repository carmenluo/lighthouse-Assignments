## Day 3
#### Everything is about object!!
*NO space for bold and itatic*<br />
**Remember to add at Lighthouse-Assignment-W1 in terminal**
**exampleL git add d3-objects/readme.md**<br/>

1. For JS object, sometimes we need to use hasOwnProperty because JS object inherit prototype properties automatically, so that we want to we get the right key.
```
for (var planet in planetMoons) {
  // additional filter for object properties:
  if (planetMoons.hasOwnProperty(planet)) {
    //  ...
  }
}
```



