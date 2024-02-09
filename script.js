function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

window.onresize = function () {
    var menu = document.getElementById("menu");
    if (window.innerWidth > 768) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
};


document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll("#imageContainer img");
    var index = 0;

    setInterval(function() {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 1500);
});

document.addEventListener("DOMContentLoaded", function() {
    var textContainer = document.getElementById("textContainer");
    var texts = ["Sasta Biryani", "Sasta palao", "Sasta daal rice"];  // Add more texts as needed
    var index = 0;
   
    setInterval(function() {
        textContainer.textContent = texts[index];
  
        index = (index + 1) % texts.length;
    }, 2000);
});

// -
function submitAddress() {
    var addressInput = document.getElementById('address');
    var userAddress = addressInput.value;

    // You can use 'userAddress' as needed, such as sending it to a server, storing it in a database, etc.
    alert('Your Address is submitted: ' + userAddress);

}

document.addEventListener('DOMContentLoaded', function () {
    var orButton = document.getElementById('oButton');
    var orerutton = document.getElementById('rButton');
    var Button = document.getElementById('Button');

    orButton.addEventListener('click', function () {
        // Show the popup
        orerutton.style.display = 'flex';
    });

    Button.addEventListener('click', function () {
        // Hide the popup when close button is clicked
        orerutton.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var orderButton = document.getElementById('orderButton');
    var orerButton = document.getElementById('orerButton');
    var closeButton = document.getElementById('closeButton');

    orderButton.addEventListener('click', function () {
        // Show the popup
        orerButton.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        // Hide the popup when close button is clicked
        orerButton.style.display = 'none';
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var erButton = document.getElementById('orrButton');
    var rerButton = document.getElementById('orButton');
    var close = document.getElementById('close');

    erButton.addEventListener('click', function () {
        // Show the popup
        rerButton.style.display = 'flex';
    });

    close.addEventListener('click', function () {
        // Hide the popup when close button is clicked
        rerButton.style.display = 'none';
    });
});
