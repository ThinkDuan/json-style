(function () {
  var jsonStyle = function (dom) {
    let innerText = JSON.stringify(JSON.parse(dom.innerText), null, 4)
    innerText = innerText.replace(/\n/g, '<br/>').replace(/\s/g, '&nbsp')
    innerText = innerText.replace(/\"[a-zA-Z0-9_-]*\"\:/g,function(match){
      return '<span class="key">'+match.split(':')[0]+'</span>:'
    })
    innerText = innerText.replace(/\:&nbsp\"[a-zA-Z0-9_-]*\"/g,function(match){
      return ':&nbsp<span class="value">'+match.split(':&nbsp')[1]+'</span>:'
    })
    dom.innerHTML = innerText
    dom.style.backgroundColor = '#f8f8f8'
    console.log(dom.innerText)
  }
  window.jsonStyle = jsonStyle
})(window)