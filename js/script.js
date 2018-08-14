var content = [
  {
    "brand":"canon"
    ,"title":"project imagina10n"
    ,"type":"homepage takeover ad"
    ,"link":null
    ,"linktext":null
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
    ,"title":"RESPONSIVE AD"
    ,"type":"Front-End Development & Responsive Design"
    ,"link":"play/digital-print/nichols-ad/"
    ,"linktext":"View HTML Ad"
    ,"image":{
      "src":"img/harvey-nichols_lipstick-stain-remover.jpg"
      ,"alt":"Harvey Nichols digital ad"
    }
    ,"story":"A personal project, and a personal challenge, to recreate a print ad as a responsive html page."
    ,"process":"Convert an image of a print design into responsive HTML and CSS. Publish online and save the working code on <a href='https://github.com/omniosi/hnichols-css-ad' target='_blank'>github</a>"
    ,"results":"Taking on this code challenge reinforced my love of responsive design and increased my personal confidence."
  }
  ,{
    "brand":"GREY"
    ,"title":"3D printed Trophy"
    ,"type":"3D Modeling & Printing"
    ,"link":null
    ,"linktext":null
    ,"image":{
      "src":"img/grey-trophy_3d-print_600W.jpg"
      ,"alt":"GREY trophy 3D print"
    }
    ,"story":"Part of my role as a Creative Technologist in advertising was evangelizing new technologies to spark our creatives. To this end, we created an <a href='http://www.psfk.com/2014/10/marriot-makerbot-grey-new-york-contest.html' target='_blank'>internal design competition</a> to concept a physical object to benefit one of our clients. Every contest needs a prize, so I created a trophy that pushed the technology."
    ,"process":"Using a series of photos from various angles of an existing art piece for reference, I modeled a series of 3D objects in <a href='https://tinkercad.com/' target='_blank'>Autodesk Tinkercad</a>, exporting each object seperately to insure proper 3D printing. Printed the pieces of the trophy using the <a href='http://www.makerbot.com/' target='_blank'>Makerbot</a> Replicator 2, including pegs and holes so that the final object can be assembled without glue."
    ,"results":"Housed in a clear plexiglass case, this Trophy was proudly displayed on the desk of the contest winner. The trophy iteself was good enough to impress the Makerbot people. For myself, I was happy to have access to a 3D printer and grow my 3D design skills."
  }
  ,{
    "brand":"Red Lobster"
    ,"title":"Go Lobster Fishing"
    ,"type":"Front-End Development"
    ,"link":"work/rl/index.html"
    ,"linktext":"View HTML Website"
    ,"image":{
      "src":"img/redLobster_parallax-site.jpg"
      ,"alt":"Red Lobster - Go Lobster Fishing"
    }
    ,"story":"Splitting a custom illustration into a responsive, parallax-scrolling site made this project a lot of fun to work on. The small team of Art Director, myself as UI designer and developer, and a javascript developer, worked tirelessly on precise scroll-position animations while adding hidden easter eggs in the experience."
    ,"process":"Convert approved designs into HTML, CSS, and Javascript, working with the brilliant Russell Weiss who made the parallax scrolling work across all the browsers that would allow it. Uploaded final designs to the Red Lobster server for deployment."
    ,"results":"This story-telling site was touted as a pride project for my agency, making its way onto our digital show-reel. <a href='work/rl/index.html' target='_blank'>View the Micro-site</a>"
  }
  ,{
    "brand":"pkboo"
    ,"title":"ecommerce site"
    ,"type":"Website Design & Front-End Development"
    ,"link":"work/pkboo/index.html"
    ,"linktext":"View HTML Website"
    ,"image":{
      "src":"img/pkboo_site_home_600W.jpg"
      ,"alt":"pkbookids.com homepage"
    }
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

function contentRender(){
  return content.map(a => {
    console.log('a = ',a)
    return articleBlock(a)
  }).join('')
}

render(contentRender(),'main')