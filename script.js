setInterval(() => {
    const date  =  new Date();
    const hour = date.getHours();
    const minut = date.getMinutes();
    const secon = date.getSeconds();

    const hrotate = 30*hour+minut/2;
    const mrotate = 6*minut;
    const srotate = 6*secon;

    hours.style.transform=`rotate(${hrotate}deg)`;
    minute.style.transform=`rotate(${mrotate}deg)`;
    second.style.transform=`rotate(${srotate}deg)`;
},1000 );