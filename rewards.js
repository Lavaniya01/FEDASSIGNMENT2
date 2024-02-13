const rewardImage = document.getElementById('reward-image');
const rewardSelect = document.getElementById('reward-select');

rewardSelect.addEventListener('change', () => {
  if (rewardSelect.value === '10') {
    rewardImage.src = "mcd.png";
  } else if (rewardSelect.value === '25') {
    rewardImage.src = "amazon.png";
  } else  {
    rewardImage.src = "starbucks.png";
  }
});
