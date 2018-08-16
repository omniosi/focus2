function loadJSON(callback){
  var xhr = new XMLHttpRequest()
  xhr.overrideMimeType("application/json")
  xhr.open('GET','js/content.json', true)
  xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == "200"){
      // .open will NOT return a IDBCursorWithValue, simply returning undefined in async mode, so use a callback
      callback(xhr.responseText)
    }
  }
  xhr.send(null)
}
// Function call with anonymous callback
loadJSON(function(response){
  json = JSON.parse(response)
  console.log('response = ',json)

  render(contentRender(json),'main')
})

// Component render helper function
var render = function(template,elem){
  // Set rendering element for the component
  if(typeof template === 'function'){
    template.elem = elem;
  }
  // If elem is an element, use it.
  // If it's a selector, get it.
  elem = typeof elem === 'string' ? document.querySelector(elem) : elem;
  if(!elem) return;
  // Get the template
  template = (typeof template === 'function' ? template(template.state) : template);
  if(typeof template != 'string') return;
  // Render the template into the element
  if(elem.innerHTML === template) return;
  elem.innerHTML = template;
  // Dispatch a render event
  if (typeof window.CustomEvent === 'function') {
    var event = new CustomEvent('render',{
      bubbles: true
    });
    elem.dispatchEvent(event);
  }
  // Return the elem for use elsewhere
  return elem;
}

function articleBlock(props){
  function linkbtn(){
    if(props.link !== null){
      return '<a class="button" href="'+ props.link +'" target="_blank">'+ props.linktext+'</a>'
    }
    return ""
  }
  function visual(){
    if(props.video){
      return '<video autoplay loop>'+Array.prototype.map.call(props.video,function(prop){
        function choose(){
          if(prop.elm === "img"){return '<img src="'+prop.src+'" alt="'+prop.alt+'">'}
          return '<source src="'+prop.src+'" type="'+prop.type+'">'
        }
        return choose()
      }).join("")+'</video>'
    }
    if(props.image){
      return '<img src="'+props.image.src+'" alt="'+props.image.alt+'">'
    }
  }
  return '<article role="article"><ul class="top"><li>'+visual()+'</li><li class="story"><h1>'+props.brand+'</h1><h2>'+props.title+'</h2><p>'+props.story+'</p></li></ul><ul class="details"><li><h3>'+props.type+'</h3>'+linkbtn()+'</li><li class="process"><h4>PROCESS</h4><p>'+props.process+'</p></li><li class="results"><h4>RESULTS</h4><p>'+props.results+'</p></li></ul></article>'
}

function contentRender(j){
  return j.map(a => {
    // console.log('a = ',a)
    return articleBlock(a)
  }).join('')
}

// render(contentRender(json),'main')