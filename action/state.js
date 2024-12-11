const checkbox = document.getElementById("hideRating");

// set initial value for checkbox
chrome.storage.local.get(["state"]).then((result) => {
    checkbox.checked = result.state
})

checkbox.addEventListener("change", () => {
    chrome.storage.local.set({"state": checkbox.checked})
    refreshWindow()
})

async function refreshWindow(){
    const [tab] = await chrome.tabs.query({url: "https://lichess.org/*"});
    if(tab != undefined){
        chrome.tabs.reload(tab.id)
    }
}