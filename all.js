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
const banner = db.ref('banner');
banner.once('value', function (snapshot) {
    let todoNum = snapshot.val();
    // console.log(todoNum.img1.img);
    let bannerMain = document.getElementById('banner');
    let str = '';
    for (item in todoNum) {
        str = `
        
        <img src="${todoNum[item].link}">
       
        `
        bannerMain.innerHTML += str;
    }

})


// db.ref('about/data3').set({text:'我是一位網頁設計師，專門客製化設計'})
const aboutData = db.ref('about');
aboutData.once('value', function (snapshot) {
    let aboutMe = document.getElementById('about-me');
    let str = '';
    let data = snapshot.val();

    // console.log(data);
    str = `
        <h1 class="title" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-out-sine"
            data-aos-mirror="false">${data.data1.text}</h1>
        <h2 data-aos="fade-down" data-aos-offset="100" data-aos-duration="500" data-aos-delay="500"
            data-aos-easing="ease-in-sine" data-aos-mirror="false" >${data.data2.text}</h2>
        <p>${data.data3.text}</p>
        
        `

    aboutMe.innerHTML = str;



})

// 第一組照片
const introduce_img_one = db.ref('introduce_one');
introduce_img_one.once('value', function (snapshot) {
    let introduce_img = document.getElementById('introduce_img_one');
    let str = '';
    let data = snapshot.val();
    str = `
        <img src="${data.introduce_one_img1.text}" alt="">
        <img src="${data.introduce_one_img2.text}" alt="">
        <img src="${data.introduce_one_img3.text}" alt="">
    
    `
    introduce_img.innerHTML = str;
})

// 文字
const introduce_one_mainData = db.ref('introduce_one_details');
introduce_one_mainData.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_mainData');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})
// 介紹
const introduce_one_introduce = db.ref('introduce_one_introduce');
introduce_one_introduce.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_introduce');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})
// 設計特點
const introduce_one_design = db.ref('introduce_one_design');
introduce_one_design.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_design');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})

// 第二組照片
const introduce_img_two = db.ref('introduce_two');
introduce_img_two.once('value', function (snapshot) {
    let introduce_img = document.getElementById('introduce_img_two');
    let str = '';
    let data = snapshot.val();
    str = `
        <img src="${data.introduce_two_img1.text}" alt="">
        <img src="${data.introduce_two_img2.text}" alt="">
        <img src="${data.introduce_two_img3.text}" alt="">
    
    `
    introduce_img.innerHTML = str;
})

// 第二組文字
const introduce_two_mainData = db.ref('introduce_two_details');
introduce_one_mainData.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_mainData');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})

// 第二組文字
const introduce_two_introduce = db.ref('details_two_introduce');
introduce_two_introduce.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_introduce');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})

// 第二組設計
const introduce_two_design = db.ref('details_two_design');
introduce_two_design.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_design');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li>${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
})