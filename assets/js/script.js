/*
    Font activation on load based on code from:
        http://www.filamentgroup.com/lab/font-events.html (Copyright (c) 2015 Filament Group)
    
    Dependencies:
    - FontFaceObserver https://github.com/bramstein/fontfaceobserver
    - Cookie function https://github.com/filamentgroup/cookie
    
    For the best performance and experience, add the `activeClass`
    class to the `<html>` element on the server side after checking
    for the presence of the `activeCookie` cookie.
*/
(function (w) {
    'use strict';
    
    var fonts = {
            'foco': [
                { 'weight': 300 },
                { 'weight': 300, 'style': 'italic' },
                { 'weight': 400 },
                { 'weight': 400, 'style': 'italic' },
                { 'weight': 700 },
                { 'weight': 700, 'style': 'italic' },
                { 'weight': 900 },
                { 'weight': 900, 'style': 'italic' }
            ]
        },
        activeClass = 'wf-active',
        activeCookie = 'pipalacademy-wf-cached',
        observers = [];
    
    // hasClass polyfill from http://youmightnotneedjquery.com/#has_class
    function hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
    }
    
    // if the class is already set, we're good.
    if (hasClass(w.document.documentElement, activeClass)) {
        return;
    }
    
    // if the fonts have already been downloaded, activate them
    // (this becomes redundant once `activeCookie` presence is
    // detected on the server side)
    // if (cookie(activeCookie)) {
    //     w.document.documentElement.className += ' ' + activeClass;
    //     return;
    // }
    
    Object.keys(fonts).forEach(function (fontFamily) {
        fonts[fontFamily].forEach(function (fontProperties) {
            var new_observer = new w.FontFaceObserver(fontFamily, fontProperties);
            observers.push(new_observer.check());
        });
    });
    
    w.Promise
        .all(observers)
        .then(function() {
            // add a class to the document indicating the fonts have loaded
            w.document.documentElement.className += ' ' + activeClass;
            
            // set a cookie to optimise future visits
            // cookie(activeCookie, 'true', 7);
        });
}(this));



