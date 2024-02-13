function calculateTriangleArea() {
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseValue = triangleBaseInput.value;
    const baseValueToNumber = parseFloat(triangleBaseValue);
    console.log(baseValueToNumber);

    // triangle height value

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const heightValueToNumber = parseFloat(triangleHeightValue);
    console.log(heightValueToNumber);

    //calculate the base and height of area

    const calculateArea = 0.5 * baseValueToNumber * heightValueToNumber;
    console.log('Area of the triangle is :', calculateArea);
} 