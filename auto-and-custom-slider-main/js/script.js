// Counter for Numbers 1 to Number of Images And Number Of Images
let counter = 1, numOfImgs = document.querySelectorAll(".images-container img").length;

let flag = 1;

function change() {

    // Get Radio and Checked
    document.getElementById("radio-" + counter).checked = true;

    // Increment or Decrement Counter to Get Next Radio
    flag ? counter++ : counter--;

    // If Reach to End then Start In Reverse
    if (counter > numOfImgs) {
        counter = numOfImgs - 1;
        flag = 0;
    }

    // If Reach to Start then Start Again
    if (counter < 1) {
        counter = 2;
        flag = 1;
    }

    // Call Again to Change Function
    setTimeout(change, 3000);
}
