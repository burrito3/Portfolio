document.addEventListener('DOMContentLoaded',function(event){
  const logo = document.getElementById("logo");
  const about = document.getElementById("aboutAnchr");
  const work = document.getElementById("workAnchr");
  const contact = document.getElementById("contactAnchr");
  logo.addEventListener("click", () => {    
      window.scrollTo({
        top: 0,
        left: 0,
      });
    });
  const Textdata = ["This is my Portfolio.", "Web Developer","Web Designer", "Coder"] 
  function typeWriter(text, i, callback){
      if(i <= (text.length)) {  

        //start off TrustedType to prevent XSS through InnerHTML
          const escapeHTMLPolicy = trustedTypes.createPolicy("myEscapePolicy", {
            createHTML: (string) => string.replace(/\>/g, "<")
            });
            let el = document.getElementById("textType");
            const escaped = escapeHTMLPolicy.createHTML("<img src=x onerror=alert(1)>");
            console.log(escaped instanceof TrustedHTML); // true
            el.innerHTML = document.getElementById("textType").innerHTML = text.substring(0, i + 1) 
            +'<span aria-hidden="true"></span>';
          //end of TrustedType

          setTimeout(function(){
              typeWriter(text, i + 1, callback)
          },100); 
          //Individual character interval
          }
          else {
            setTimeout(callback,1500);
          }
          }
          function StartTextAnimation(i) {
              if (typeof Textdata[i] == 'undefined'){
                 StartTextAnimation(0);
                document.getElementById("textType").classList.remove("style");
              }

   const obj = "This is my Portfolio."
      if (i <= Textdata[i].length) {
          // text exists -> start typewriter animation
         typeWriter(Textdata[i], 0, function(){
           // after callback (and whole text has been animated), start next text
            StartTextAnimation(i + 1);
            if(Textdata.includes(obj)){
              document.getElementById("textType").classList.add("style");
          }
         });
        }
           }
      // start the text animation
      StartTextAnimation(0);
    });
      let scrolled = false
const getOffSet = () =>{
  const scroll = window.pageYOffset;
          if(scroll > 50){
          document.getElementById('navbar').classList.add("static")
        if(!scrolled){
            navbar.style.top = "-80px"
          }

        setTimeout(function(){
         navbar.style.top = "0"
         scrolled = true
        },300)
      }
       //setting scrolled to true so -60px doesnt repeat after current > 100
       //setting scrolled to false if current ! > 100 so the function can be used more than once
       else{
        scrolled = false
      }

        if(scroll < 100){
          navbar.classList.remove("static")
        }
}
      window.addEventListener('scroll', getOffSet);
        
    

    function Call(){
        const int = setInterval(update, 5);
        let width = 0;
                function update(){  
                  const scroll = window.pageYOffset;
              
                   progressHtml = document.getElementById("progress-html");
                   progressCss = document.getElementById("progress-css");
                   progressJs = document.getElementById("progress-js");
        
              
                if(scroll > 900){
                        width++;
                        progressHtml.style.width = width + "%";
                        progressCss.style.width = width + "%";
                        progressJs.style.width = width + "%";
                     }
                    }
                    
                       };
                    
                
                
    
window.addEventListener('scroll', Call())
        
