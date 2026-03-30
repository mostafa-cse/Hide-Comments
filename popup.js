// Load saved settings when popup opens
document.addEventListener('DOMContentLoaded', () => {
  chrome.storage.sync.get(['hideComments', 'hideAttention', 'fullWidth'], (result) => {
    document.getElementById('hideComments').checked = result.hideComments || false;
    document.getElementById('hideAttention').checked = result.hideAttention || false;
    document.getElementById('fullWidth').checked = result.fullWidth || false;
  });

  // Save settings when checkboxes change
  document.getElementById('hideComments').addEventListener('change', (e) => {
    chrome.storage.sync.set({ hideComments: e.target.checked });
  });

  document.getElementById('hideAttention').addEventListener('change', (e) => {
    chrome.storage.sync.set({ hideAttention: e.target.checked });
  });

  document.getElementById('fullWidth').addEventListener('change', (e) => {
    chrome.storage.sync.set({ fullWidth: e.target.checked });
  });
});