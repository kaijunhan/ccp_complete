

// Function to create a font size adjustment feature
function createFontSizeAdjustment() {
  const fontSizeContainer = document.createElement('div');
  fontSizeContainer.classList.add('font-size-container');

  const decreaseButton = document.createElement('button');
  decreaseButton.textContent = '-';
  decreaseButton.addEventListener('click', decreaseFontSize);
  decreaseButton.classList.add('font-size-button');

  const increaseButton = document.createElement('button');
  increaseButton.textContent = '+';
  increaseButton.addEventListener('click', increaseFontSize);
  increaseButton.classList.add('font-size-button');


  fontSizeContainer.appendChild(decreaseButton);
  fontSizeContainer.appendChild(increaseButton);
  document.body.querySelector("main").appendChild(fontSizeContainer);
}

// Function to decrease the font size
function decreaseFontSize() {
  const html = document.documentElement;
  const currentFontSize = parseFloat(window.getComputedStyle(html).fontSize);
  html.style.fontSize = `${currentFontSize - 1}px`;
}

// Function to increase the font size
function increaseFontSize() {
  const html = document.documentElement;
  const currentFontSize = parseFloat(window.getComputedStyle(html).fontSize);
  html.style.fontSize = `${currentFontSize + 1}px`;
}

// Call the functions to create the accessibility features
createFontSizeAdjustment();