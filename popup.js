let isEnabled = true;

chrome.storage.sync.get('isEnabled', function(data) {
  isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
  document.getElementById('toggleButton').textContent = isEnabled ? 'Disable' : 'Enable';
});

document.getElementById('toggleButton').addEventListener('click', function() {
  isEnabled = !isEnabled;
  chrome.storage.sync.set({isEnabled: isEnabled});
  document.getElementById('toggleButton').textContent = isEnabled ? 'Disable' : 'Enable';
});

function injectText() {
  if (isEnabled) {
    const header = document.querySelector('h2.t-black.ph1.t-bold.t-18');
    const hello = document.createElement('span');
    hello.textContent = 'Hello';
    header.insertAdjacentElement('afterend', hello);
  }
}

setTimeout(injectText, 4000);
