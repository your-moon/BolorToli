function getSelected() {
  s = window.getSelection();
  oRange = s.getRangeAt(0); //get the text range
  oRect = oRange.getBoundingClientRect();
  return s.toString() 
}
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const tab = tabs[0];
  const injection1 = {
    func: getSelected,
    target: { tabId: tab.id },
  };
  chrome.scripting.executeScript(
    injection1,
    (selection) => {
      if(selection) {
        document.getElementById("output").value = selection[0].result;
        console.log(selection)
      }
      
    }
  );
});
