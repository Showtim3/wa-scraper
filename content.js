console.log("COntent running");
console.log(document);

setTimeout(function(){
    console.log("called");
    const dom = document;
    const msg = document.getElementsByClassName('_1ovWX');

    while(msg.length > 0){
        msg[0].parentNode.removeChild(msg[0]);
    }

    const names = dom.getElementsByClassName('_19RFN');
    for(let elt of names){
        elt.style['background-color'] = 'red';
    }
    let index=0;
    Array.prototype.forEach.call(names, function(el) {
        // Do stuff here
        if(index%2===0){
            console.log(el.innerHTML);
        }
        index++;
    });
    // console.log(names2);
    console.log(names);
},10000);
