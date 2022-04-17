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
$('.sent1').click(function(){
    let bannerRef = $(this).data('imgsss');
    let inputData = $('#'+bannerRef+'').val();
    if(!inputData == ''){
        db.ref('banner/'+bannerRef+'').set({link:inputData}).then(function(){
            $('input[type="text"]').val('');
        })
    }else{
        console.log('空的');
    }

    
})

$('.sent2').click(function(){

    let dataText = $(this).data('texttt');
    let inputData = $('#'+dataText+'').val();

    if(!inputData == ''){
        db.ref('about/'+dataText+'').set({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        })
    }else{
        console.log('空的');
    }

    
})
$('.sent3').click(function(){

    let dataText = $(this).data('img1');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('introduce_one/'+dataText+'').set({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        })
    }else{
        console.log('空的');
    }

    
})

// 產品規格
$('.sent3_1').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('introduce_one_details').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
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
        <li class="one_details"  data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_one_mainData.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)
    
})

// var nameRef = firebase.database().ref().child('todos');
// introduce_one_mainData.child('-N-sBda_BMwvoE7TQErc').remove();





// 介紹
$('.sent3_2').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('introduce_one_introduce').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
})
const introduce_one_introduce = db.ref('introduce_one_introduce');
introduce_one_introduce.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_introduce');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li class="one_details1" data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details1').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_one_introduce.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)

    
})

// 設計特點
$('.sent3_3').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    if(!inputData == ''){
        db.ref('introduce_one_design').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
})

const introduce_one_design = db.ref('introduce_one_design');
introduce_one_design.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_design');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li class="one_details2" data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details2').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_one_design.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)
})


// 第二組照片
$('.sent4').click(function(){

    let dataText = $(this).data('img2');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('introduce_two/'+dataText+'').set({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        })
    }else{
        console.log('空的');
    }

    
})
//  第二組文字
$('.sent4_1').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('introduce_two_details').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
})

//
const introduce_two_mainData = db.ref('introduce_two_details');
introduce_two_mainData.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_mainData');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li class="one_details3" data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details3').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_two_mainData.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)
})

// 第二組介紹
$('.sent4_2').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('details_two_introduce').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
})

const introduce_two_introduce = db.ref('details_two_introduce');
introduce_two_introduce.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_introduce_data');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        // console.log(data[item].text);
        str=`
        <li class="one_details4" data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details4').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_two_introduce.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)
})

// 第二組設計
$('.sent4_3').click(function(){
    let dataText = $(this).data('details');
    let inputData = $('#'+dataText+'').val();
    // console.log(inputData);
    if(!inputData == ''){
        db.ref('details_two_design').push({text:inputData}).then(function(){
            $('input[type="text"]').val('');
        }).then(function(){
            alert('新增成功')
            history.go(0)
        })
    }else{
        console.log('空的');
    }
})

// 
const introduce_two_design = db.ref('details_two_design');
introduce_two_design.once('value', function (snapshot) {
    let introduce_mainData = document.getElementById('details_two_design_data');
    let str = '';
    let data = snapshot.val();
    for (item in data) {
        
        str=`
        <li class="one_details5" data-key2="${item}">${data[item].text}</li>
        `
        introduce_mainData.innerHTML +=str;
    }
    setTimeout(function(){
        console.log('ready');
        
        $('.one_details5').on('click',function(){
            let datakey = $(this).data('key2');
            // console.log(datakey);
            introduce_two_design.child(datakey).remove().then(function(){
                alert('刪除成功')
                history.go(0)
            });
            
        })
    },3000)
})