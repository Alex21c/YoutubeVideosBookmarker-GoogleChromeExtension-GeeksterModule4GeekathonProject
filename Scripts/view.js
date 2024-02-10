
  let divInstructionsHowToUseThisExtension = document.querySelector('div#divInstructionsHowToUseThisExtension');  
  divInstructionsHowToUseThisExtension.addEventListener('click', ()=>{
    chrome.tabs.create({ url: chrome.runtime.getURL("instructionsHowToUse.html") });
  });



 