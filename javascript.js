setInterval(() => {
    d = new Date();
    hourT = d.getHours();
    minuteT = d.getMinutes();
    secondT = d.getSeconds();

    hrotation = 30*hourT + minuteT/2;
    mrotation = 6*minuteT;
    srotation = 6*secondT; 

    hour.style.transform =`rotate(${hrotation}deg)`;
    minute.style.transform =`rotate(${mrotation}deg)`;
    second.style.transform =`rotate(${srotation}deg)`;

},1000);