const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

    // Select all price elements
    const prices = document.querySelectorAll(".price");

    let total = 0;

    // Loop through and sum
    prices.forEach((price) => {
        total += Number(price.textContent);
    });

    // Create new row
    const table = document.querySelector("table");
    const row = document.createElement("tr");

    // Create cell
    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = "Total Price: " + total;

    row.appendChild(cell);

    // Append row to table
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);

