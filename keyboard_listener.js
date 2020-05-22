const nums = [];

for (let elId = 0; elId < 10; elId++) {
  nums.push(document.getElementById(elId));
}

console.log(nums);

document.addEventListener("keyup", ($event) => {
  const keyPressed = +$event.key;

  if (keyPressed || keyPressed === 0) {
    nums[keyPressed].click();
  }

});
