Object.defineProperty(Element.prototype,"placeholder",{set:function(e){if(!e||!/^(input|textarea)$/i.test(this.nodeName)||!/^(email|number|password|search|tel|text|url|)$/i.test(this.getAttribute("type")))return;var t=this,n=document.createElement("-ms-input"),i=n.appendChild(document.createElement("-ms-placeholder")),o=i.appendChild(document.createTextNode(e)),r=n.runtimeStyle,a=i.runtimeStyle,l=t.currentStyle,c;r.display="inline-block";r.fontSize="100%";r.margin=l.margin;r.width=l.width;t.parentNode.insertBefore(n,t).appendChild(t);a.backgroundColor="transparent";a.fontFamily=l.fontFamily;a.fontSize=l.fontSize;a.margin="2px 0 0 2px";a.padding=l.padding;a.position="absolute";a.display=t.value?"none":"inline-block";t.runtimeStyle.margin="0";i.attachEvent("onclick",function(e){t.focus()});t.attachEvent("onkeypress",function(e){a.display="none"});t.attachEvent("onkeyup",function(e){a.display=t.value?"none":"inline-block"});Object.defineProperty(t,"placeholder",{get:function(){return i.innerHTML},set:function(e){i.innerHTML=e}})}});document.addEventListener("DOMContentLoaded",function(e){Array.prototype.forEach.call(document.querySelectorAll("input,textarea"),function(e){if(e.placeholder)e.placeholder=e.placeholder})});