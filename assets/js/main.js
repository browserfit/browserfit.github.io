(function(){
    'use strict'
//add target='_blank' to external links
    var extLink = document.querySelectorAll('a'),
        extLinkLength = extLink.length,
        localDomain = document.location.host,
        i = 0;
    for(i; i < extLinkLength; i+=1) {
        if (extLink[i].href.indexOf(localDomain) == -1) {
            extLink[i].target = '_blank';
        }
    }
})();