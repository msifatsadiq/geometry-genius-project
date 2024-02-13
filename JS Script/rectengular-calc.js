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

    // calculate the base and height of the area

    const calculateRectangleArea = rectangleBaseValueToNumber * rectangleHeightValueToNumber;
    console.log('Area of the rectangle is: ', calculateRectangleArea);

    // display the rectangle area

    const rectangleAreaSpan = document.getElementById('rectangle-span');
    rectangleAreaSpan.innerText = calculateRectangleArea;


}