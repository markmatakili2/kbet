// script.js
document.addEventListener('DOMContentLoaded', function () {
  const options = document.querySelectorAll('.option');
  const activeBetsTable = document.getElementById('active-bets');

  options.forEach(option => {
    option.addEventListener('click', function () {
      const gameName = this.parentNode.parentNode.querySelector('td:first-child').textContent;
      const betAmount = document.getElementById('bet-amount').value;
      const expectedWinning = calculateExpectedWinning(betAmount);
      const newRow = `
        <tr>
          <td>${gameName}</td>
          <td>${betAmount}</td>
          <td>${expectedWinning}</td>
        </tr>
      `;
      activeBetsTable.querySelector('tbody').insertAdjacentHTML('beforeend', newRow);
    });
  });

  function calculateExpectedWinning(amount) {
    // Implement your calculation logic here
    return amount * 2; // Assuming winning amount is twice the bet amount
  }

  document.getElementById('bet-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // You can handle form submission here if needed
  });
});
