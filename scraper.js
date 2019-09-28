

$(function(){

    $('#scrapeButton').click(function(){
        console.log('called');
        console.log(document);
        chrome.tabs.executeScript(0, {  }, function(result) {
            console.log(tabId);
            console.log(result);
        });
            scrape();
    })

    function scrape() {
        console.log("inside scraper");
        let className = '_19RFN';
        var all = $(`.${className}`).map(function(ele) {
            console.log(ele);
            return this.innerHTML;
        }).get();

        console.log(all);
    }
})
