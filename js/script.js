document.addEventListener('DOMContentLoaded', () => {
    const rangeOne = document.querySelector('#rangeOne');
    const valueContainer = document.querySelector('#valueOne');
    const valueTable = document.querySelector('#tableOne');

    let previousValue = 0; // Przechowuje poprzednią wartość dla porównania
    let currentTop = 0; // Przechowuje aktualną pozycję w pionie valueTable

    let updateValue = () => {
        let currentValue = rangeOne.value;
        valueContainer.innerHTML = currentValue;

        // Wyznacz kierunek przesunięcia
        let direction = currentValue > previousValue ? 1 : -1; // 1 w górę, -1 w dół

        // Aktualizuj pozycję w pionie
        currentTop += direction * -50;  // Przesuń o 10px w wyznaczonym kierunku
        valueTable.style.top = currentTop + 'px';

        // Zapisz aktualną wartość dla następnego porównania
        previousValue = currentValue;
    }


    rangeOne.addEventListener('input', updateValue);

    
    /////////////////////////////
    // ANIMATION 2
    /////////////////////////////

    const rangeTwo = document.querySelector('#rangeTwo');
    const valueTwoContainer = document.querySelector('#valueTwo');
    const ballColors = document.querySelector('#ball-colors')

    let currentAngle = 0;

    let ballRotate = () => {
        let currentValueBall = rangeTwo.value;
        valueTwoContainer.innerHTML = currentValueBall;

        currentAngle = currentValueBall;
        ballColors.style.transform = `rotateY(${currentAngle}deg) rotateZ(${currentAngle}deg)`;
        

    }

    rangeTwo.addEventListener('input', ballRotate);

});
