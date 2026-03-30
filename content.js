// Function to apply styles based on settings
function applySettings(settings) {
  const body = document.body;

  // 1. Toggle Comments Class
  if (settings.hideComments) {
    body.classList.add('cf-ext-hide-comments');
  } else {
    body.classList.remove('cf-ext-hide-comments');
  }

  // 2. Toggle Full Width Class
  if (settings.fullWidth) {
    body.classList.add('cf-ext-full-width');
  } else {
    body.classList.remove('cf-ext-full-width');
  }

  // 3. Handle "Pay Attention" (Requires DOM manipulation)
  // We look for sidebox elements that contain specific text
  const sideboxes = document.querySelectorAll('.sidebox');
  const keywords = ['Pay attention', 'Notice', 'Important'];
  
  sideboxes.forEach(box => {
    const text = box.innerText;
    const isAttentionBox = keywords.some(keyword => text.includes(keyword));
    
    if (isAttentionBox) {
      if (settings.hideAttention) {
        box.classList.add('cf-ext-hidden-element');
      } else {
        box.classList.remove('cf-ext-hidden-element');
      }
    }
  });
}

// Load settings on page load
chrome.storage.sync.get(['hideComments', 'hideAttention', 'fullWidth'], (result) => {
  applySettings(result);
});

// Listen for changes made in the popup without refreshing page
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync') {
    chrome.storage.sync.get(['hideComments', 'hideAttention', 'fullWidth'], (result) => {
      applySettings(result);
    });
  }
});