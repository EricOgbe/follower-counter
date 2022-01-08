const twitterCount = document.querySelector('.twitter-count')
const instaCount = document.querySelector('.insta-count')
const youtubeCount = document.querySelector('.youtube-count')


let twitter = 0;
let insta = 0;
let youtube = 0;

function twitterCounter() {
   if ( twitter > 204){
       twitter = 205
   }else{
       twitter++
   }
   
    twitterCount.innerHTML = twitter
}

setInterval(twitterCounter, 16)

function youtubeCounter() {
    if ( youtube > 303){
        youtube = 304
    }else{
        youtube++
    }
    
     youtubeCount.innerHTML = youtube
 }
 
 setInterval(youtubeCounter, 12)

 function instaCounter() {
    if ( insta > 401){
        insta = 402
    }else{
        insta++
    }
    
     instaCount.innerHTML = insta
 }
 
 setInterval(instaCounter, 8)
    


 
        

 
        
