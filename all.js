const firebaseConfig = {
    apiKey: "AIzaSyBpDVo3L1S9CRV8n17CXusVF94boE_iv0o",
    authDomain: "audio-1890c.firebaseapp.com",
    projectId: "audio-1890c",
    storageBucket: "audio-1890c.appspot.com",
    messagingSenderId: "55334774479",
    appId: "1:55334774479:web:3d26805eb21ff91480f9ba",
    measurementId: "G-SJCW4CYH0Z"
};

let app = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.database();

// db.ref('banner/img5').set({link:'https://upload.cc/i1/2022/04/04/R0HPo5.jpg'})
const banner =  db.ref('banner');
banner.once('value',function(snapshot){
    let todoNum = snapshot.val();
    console.log(todoNum.img1.img);
    let bannerMain = document.getElementById('banner');
    let str = '';
    for(item in todoNum){
        str = `
        
        <img src="${todoNum[item].link}">
       
        `
        bannerMain.innerHTML += str;
    }
   
})


// db.ref('about/data3').set({text:'我是一位網頁設計師，專門客製化設計'})
const aboutData = db.ref('about');
aboutData.once('value',function(snapshot){
    let aboutMe = document.getElementById('about-me');
    let str = '';
    let data = snapshot.val();
   
        // console.log(data);
        str = `
        <h1 class="title" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out-sine"
            data-aos-mirror="false">${data.data1.text}</h1>
        <h2 data-aos="fade-down" data-aos-offset="100" data-aos-duration="500" data-aos-delay="500"
            data-aos-easing="ease-in-sine" data-aos-mirror="false">${data.data2.text}</h2>
        <p>${data.data3.text}</p>
        
        `
        
        aboutMe.innerHTML = str;

        
    
})