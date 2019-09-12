
String.prototype.toFullWidth = function() {
    return this.replace(/[A-Z a-z 0-9]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) + 0xfee0);
    });
}



function translate(str){
    var t = document.createElement('script');
    document.head.appendChild(t);
    t.text = alert(str.toFullWidth());
}