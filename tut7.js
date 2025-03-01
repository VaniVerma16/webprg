function calculate() {
    let num = parseInt(document.getElementById("num").value);
    let tab = `<table>
                    <tr>
                      <th>Number</th>
                      <th>Operator</th>
                      <th>Multiplier</th>
                      <th>Result</th>
                    </tr>`;

    for (let i = 1; i <= 10; i++) {
      tab += `<tr>
                  <td>${num}</td>
                  <td>×</td>
                  <td>${i}</td>
                  <td>${num * i}</td>
                </tr>`;
    }
    tab += `</table>`;

    document.getElementById("table").innerHTML = tab;
  }