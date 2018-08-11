var content = [
  {
    "brand":"canon"
    ,"title":"project imagina10n"
    ,"type":"homepage takeover ad"
    ,"video":[{
      "elm":"source"
      ,"src":"img/canon-nytimes-takeover-jamie-foxx.mp4"
      ,"type":"video/mp4"
      ,"alt":""
    },{
      "elm":"source"
      ,"src":"img/canon-nytimes-takeover-jamie-foxx.webm"
      ,"type":"video/webm"
      ,"alt":""
    },{
      "elm":"img"
      ,"src":"img/canon_imagina10n_takeover.jpg"
      ,"type":""
      ,"alt":"Canon Project Imagina10n takeover ad"
    }]
    ,"story":"After repeated failed attempts to get the text-destructive animation just right, I was approached to create this animation. I worked directly with the ad publisher and nytimes.com to make sure that this home-page takeover ad performed perfectly."
    ,"process":"Animation created in Adobe Flash with ActionScript code for the vendor's custom ad server code. Files uploaded to FTP server for delivery to outside vendor for deployment."
    ,"results":"The attention to detail in this animation, the ability to get up to speed quickly, and work well within the newyorktimes.com submissions guideline, and finally, the quick turnaround on my portion of this project solidified me as a go to designer/developer for the Canon team at Grey New York. This led to my role in future projects as a Creative Technologist."
  }
  ,{
    "brand":"HARVEY NICHOLS"
    ,"title":"DIGITAL AD"
    ,"type":"Front-End Development & Responsive Design"
    ,"image":[{
      "src":"img/harvey-nichols_lipstick-stain-remover.jpg"
      ,"alt":"Harvey Nichols digital ad"
    }]
    ,"story":"A personal project, and a personal challenge, to recreate a print ad as a responsive html page."
    ,"process":"Convert an image of a print design into responsive HTML and CSS. Publish online and save the working code on <a href='https://github.com/omniosi/hnichols-css-ad' target='_blank'>github</a>"
    ,"results":"Taking on this code challenge reinforced my love of responsive design and increased my personal confidence."
  }
  ,{
    "brand":"pkboo"
    ,"title":"ecommerce site"
    ,"type":"Website Design & Front-End Development"
    ,"art":[{
      "elm":"source"
      ,"src":"img/canon-nytimes-takeover-jamie-foxx.mp4"
      ,"type":"video/mp4"
      ,"alt":""
    },{
      "elm":"source"
      ,"src":"img/canon-nytimes-takeover-jamie-foxx.webm"
      ,"type":"video/webm"
      ,"alt":""
    },{
      "elm":"img"
      ,"src":"img/canon_imagina10n_takeover.jpg"
      ,"type":""
      ,"alt":"Canon Project Imagina10n takeover ad"
    }]
    ,"story":"Starting from the logo design for this stylish baby accessory brand, I was able to match a sense of fun with practically, which is exactly the brand ethos of the client. For this project, I created the logo and the site design, then coded the static site that was then passed to the Shopify/Magento developer to add the ecommerce code."
    ,"process":"Layout in Adobe InDesign with retouching in Photoshop. Convert approved designs into HTML and CSS. Handoff final coded layouts to back-end developer to incorporate Shopify ecommerce functionality."
    ,"results":"The fun and versatile logo inspired new uses on the physical product; from labels and stamps to plans of a stuffed, plush toy. The website design immediately led to sales and was featured in press for the company."
  }
]

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
    return '<img src="'+props.image.src+'" alt="'+props.image.alt+'">'
  }
  return '<article role="article"><ul class="top"><li>'+visual()+'</li><li class="story"><h1>'+props.brand+'</h1><h2>'+props.title+'</h2><p>'+props.story+'</p></li></ul><ul class="details"><li><h3>'+props.type+'</h3></li><li class="process"><h4>PROCESS</h4><p>'+props.process+'</p></li><li class="results"><h4>RESULTS</h4><p>'+props.results+'</p></li></ul></article>'
}

function contentRender(){
  return content.map(a => {
    console.log('a = ',a)
    return articleBlock(a)
  }).join('')
}

render(contentRender(),'main')