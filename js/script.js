document.addEventListener('DOMContentLoaded', () => {
    const rangeOne = document.querySelector('#rangeOne');
    const valueContainer = document.querySelector('.value-container');
    const valueTable = document.querySelector('#tableOne');

    let previousValue = 0; // Przechowuje poprzednią wartość dla porównania
    let currentTop = 0; // Przechowuje aktualną pozycję w pionie valueTable

    let updateValue = () => {
        const currentValue = rangeOne.value;
        valueContainer.innerHTML = currentValue;

        // Wyznacz kierunek przesunięcia
        const direction = currentValue > previousValue ? 1 : -1; // 1 w górę, -1 w dół

        // Aktualizuj pozycję w pionie
        currentTop += direction * -50;  // Przesuń o 10px w wyznaczonym kierunku
        valueTable.style.top = currentTop + 'px';

        // Zapisz aktualną wartość dla następnego porównania
        previousValue = currentValue;
    }


    rangeOne.addEventListener('input', updateValue);
});
