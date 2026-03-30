const getSum = () => {

    const prices = document.querySelectorAll(".prices");

    let total = 0;

    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Remove old total row
    const oldRow = document.getElementById("ans");
    if (oldRow) oldRow.remove();

    // Create new row
    const row = document.createElement("tr");
    row.id = "ans";

    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = total;

    row.appendChild(cell);

    document.querySelector("table").appendChild(row);
};


document.getElementById("sum-btn").addEventListener("click", getSum);