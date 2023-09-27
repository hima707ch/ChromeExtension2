// content.js

if (window.location.hostname === "www.linkedin.com" && window.location.pathname.startsWith("/in/")) {
    
    let observerId;

    const observer = new MutationObserver(function () {
        try{
            const name = document.getElementsByClassName("text-heading-xlarge inline t-24 v-align-middle break-words")[0].textContent.trim();
            const location = document.getElementsByClassName("text-body-small inline t-black--light break-words")[0].textContent.trim();
            let followers = document.getElementsByClassName(`pv-top-card--list pv-top-card--list-bullet`)[0].textContent.trim();
            const about = document.getElementsByClassName(`inline-show-more-text
            inline-show-more-text--is-collapsed
            inline-show-more-text--is-collapsed-with-line-clamp
             full-width`)[0].textContent.trim();

            const bioLine = document.getElementsByClassName("pv-text-details__left-panel")[0].children[1].textContent.trim();

            const arr = followers.replace(/\s+/g, ' ').trim().split(' ');
            let connection;
           
            followers = arr[0];
            if(arr.length == 4){
                connection = arr[2];
            }
             
            
           
            function closeObserver(){

                clearTimeout(observerId);

                observerId = setTimeout(async()=>{
                
                    observer.disconnect();
                    const data = {
                        name,
                        location,
                        followers,
                        connection,
                        bioLine,
                        about,
                        url : window.location.href
                    }

                    const res = await fetch("http://localhost:4000/api/create",{
                        method : 'POST',
                        headers :{
                            'Content-Type': 'application/json',
                        },
                        body : JSON.stringify(data)
                    })

                    console.log(res,followers);
                   
                },3000)
            }
            closeObserver();
            
        
        }
        catch(err){
            console.log("hit",err)
        }
    });

    // Start observing changes in the DOM.
    observer.observe(document.body, { childList: true, subtree: true });
}
