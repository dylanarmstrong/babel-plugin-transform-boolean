Convert those pesky `||` into string concatenations.

In your `babel.config.json`, place the following:

```
  "plugins": [
    "@dylanarmstrong/babel-plugin-transform-boolean"
  ]
```

```
console.log('hello' || ' ' || 'world');
```
