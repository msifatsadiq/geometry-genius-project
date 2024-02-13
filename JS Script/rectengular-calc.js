function calculateRectangularArea() {
    // rectangle base value 
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseValue = rectangleBaseInput.value;
    const rectangleBaseValueToNumber = parseFloat(rectangleBaseValue);
    console.log(typeof rectangleBaseValueToNumber);

    // rectangle height value
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightValue = rectangleHeightInput.value;
    const rectangleHeightValueToNumber = parseFloat(rectangleHeightValue);
    console.log(typeof rectangleHeightValueToNumber);

}