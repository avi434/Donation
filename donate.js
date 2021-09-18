document.querySelector('#rzp-button1').addEventListener('click',function(e){
    const data=prompt(" enter amount")
    var options = {
    "key": "rzp_test_P7RviXNTtgdiKY", // Enter the Key ID generated from the Dashboard
    "amount":data+"00", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Avinash",
    "description": "Test Transaction",
    "image": "https://www.thesparksfoundationsingapore.org/images/logo_small.png",
    "handler": function (response){
        window.location.replace("thankyou!.html")
    },
    "prefill": {
        "name": "avinash",
        "email": "avi190824@gmail.com",
        "contact": "6383555674"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

var rzp1 = new Razorpay(options);
rzp1.on('payment.failure', function (response){
        console.log(response)
});
    
     rzp1.open();
    e.preventDefault(); 
})
