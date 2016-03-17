## Angular2 Upgrade Experiments
 
Example of comunication between NG1 and NG2 using a Bridge Service that implements the `Subject` class of `RxJS`

```js
 	Bridge.on('eventKey', callbackFunction)

    Bridge.save('eventKey', valuePassedToCallback)
    
    Bridge.remove('eventKey') 
```