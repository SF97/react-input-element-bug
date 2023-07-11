function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function reproduceBug() {
  // Simulate script parsing after React bundle
  await sleep(5000);

  const descriptor = Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value',
  );
  const {get, set} = descriptor;


  Object.defineProperty(HTMLInputElement.prototype, 'value', {
    configurable: true,
    get: function () {
      console.log('Call to HTMLInputValue.prototype.value intercepted')
      return get.call(this);
    },
    set: function (value) {
      set.call(this, value);
    },
  })

}

reproduceBug();
