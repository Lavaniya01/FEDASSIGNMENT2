const rewardImage = document.getElementById('reward-image');
const rewardSelect = document.getElementById('reward-select');

rewardSelect.addEventListener('change', () => {
  if (rewardSelect.value === '10') {
    rewardImage.src = "images/mcd.jpg";
  } else if (rewardSelect.value === '25') {
    rewardImage.src = "images/amazon.jpg";
  } else  {
    rewardImage.src = "images/starbucks.jpg";
  }
});
