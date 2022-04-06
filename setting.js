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