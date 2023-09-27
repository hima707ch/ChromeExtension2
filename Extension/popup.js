
const urls = [
    "https://www.linkedin.com/in/angela-yu1",
    "https://www.linkedin.com/in/love-babbar-38ab2887",
    "https://www.linkedin.com/in/aman-gupta-7217a515",
    "https://www.linkedin.com/in/riteshagar/",
    "https://www.linkedin.com/in/andreineagoie/"
]


document.getElementById('openTabs').addEventListener("click",function(){
    
    for(i in urls){
        window.open(urls[i]);
    }

})
