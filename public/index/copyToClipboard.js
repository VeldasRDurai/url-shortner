const copyToClipboard = type => {
  console.log("Copied");
  const text = type == "LINK" ?
    document.getElementById('link').value : 
    `http://localhost:3000/redirect/${document.getElementById('uniqueId').value}` ;
  if (navigator.clipboard) { // default: modern asynchronous API
    return navigator.clipboard.writeText(text);
  } else if (window.clipboardData && window.clipboardData.setData) {     // for IE11
    window.clipboardData.setData('Text', text);
    return Promise.resolve();
  }
}