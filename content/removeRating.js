// Extension Disabled? Do nothing
chrome.storage.local.get(["state"]).then((result) => {
    if(result.state){
        removeLeftSideRating()
        removeRightSideRating()
    }
})

// Small Rating on the left side under the current gamemode
function removeLeftSideRating(){
    const userElements = document.getElementsByClassName("user-link")
    for (let item of userElements) {
        const startOfRating = item.innerHTML.lastIndexOf("(")
        if(startOfRating != -1){
            const withOutRating = item.innerHTML.substring(0, startOfRating)
            item.innerHTML = withOutRating
        }
    }
}

// next to each players time
function removeRightSideRating(){
    const ratings = document.getElementsByTagName("rating")
    for(let item of ratings){
        item.style.display = "none"
    }
}
