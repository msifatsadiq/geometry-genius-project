function calculateRectangularArea() {
    // rectangle base value 
    const rectangleBaseInput = document.getElementById('rectangle-base');
    const rectangleBaseValue = rectangleBaseInput.value;
    const rectangleBaseValueToNumber = parseFloat(rectangleBaseValue);
    console.log(rectangleBaseValueToNumber);

    // rectangle height value
    const rectangleHeightInput = document.getElementById('rectangle-height');
    const rectangleHeightValue = rectangleHeightInput.value;
    const rectangleHeightValueToNumber = parseFloat(rectangleHeightValue);
    console.log(rectangleHeightValueToNumber);

    // calculate the base and height of the rectangle area
    const calculateRectangleArea = rectangleBaseValueToNumber * rectangleHeightValueToNumber;
    console.log('Area of the rectangle is: ', calculateRectangleArea);

    // display the rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-span');
    rectangleAreaSpan.innerText = calculateRectangleArea;
}

// another short way to do this calculation 
function calculateRectangularArea() {
    let rectangleBaseInput = parseFloat(document.getElementById('rectangle-base').value);
    let rectangleHeightInput = parseFloat(document.getElementById('rectangle-height').value);
    console.log(rectangleBaseInput, rectangleHeightInput);
    let value = document.getElementById('rectangle-span').innerText = rectangleBaseInput * rectangleHeightInput;
    console.log(value);

}