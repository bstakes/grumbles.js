# `grumbles.js`

`Grumbles.js` is a very simple library which can be used to determine when your
user is upset by listening for when they grumble (read: shout swear words). It
works via the experimental [`SpeechRecognition`] api currently available in the
latest version of Chrome.

## Installation

### NPM

```sh
npm i -S grumbles
```

### CDN (UMD)

```html
<script src="https://unpkg.com/grumbles@1.0.0-alpha.2"></script>
```

## Usage

```js
const stop = grumbles(({ word, context, time }) => {
  console.log(time);    // The time the grumble was grumbled.
  console.log(word);    // The word which was grumbled.
  console.log(context); // The full phrase containing the grumble.
}, 'en'); // Language is optional and defaults to 'en'
stop(); // Call this if you ever want to stop listening.
```

## Use Cases

* Log grumbles so you can get a metric of grumbles / minute.
* Open a help dialog when your user grumbles.
* Other stuff maybe.

## License

**MIT**

[`SpeechRecognition`]: https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition "SpeechRecognition"
