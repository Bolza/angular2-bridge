## Angular2 Upgrade Experiments
 
Example of comunication between NG1 and NG2 using a Bridge Service that implements the `Subject` class of `RxJS`

```js
// adds an event listener to be fired whenever `.save` will be called on that `eventKey`
Bridge.on('eventKey', callbackFunction)

// sets a value to the `eventKey` and emits the event
Bridge.save('eventKey', valuePassedToCallback)

// unbinds the listeners on this `eventKey`
Bridge.remove('eventKey') 
```