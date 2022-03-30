function calc()
{
    var q1 = document.getElementById('q1').value;
    var q2 = document.getElementById('q2').value;
    var q3 = document.getElementById('q3').value;
    var q4 = document.getElementById('q4').value;
    var q5 = document.getElementById('q5').value;
    var q6 = document.getElementById('q6').value;
    var q7 = document.getElementById('q7').value;

    var result = document.getElementById('result').value = q1 * 2.5 * 7 + q2 * 4.5 + q3 * 1.5 * 7 + q4 * 2 * 7 + q5 * 2 * 7 + q6 * 1 + q7 * 2 * 7;

    if (result > 450) {
      document.getElementById("message").innerHTML = "&nbsp; Your average gallon usage per week is GREATER than the average gallons of water user per week (450 gallons). <b> Keep working! </b>";
    }

    if (result < 450) {
      document.getElementById("message").innerHTML = "&nbsp; <b> Congratulations! </b> Your average gallon usage per week is LESS than the average gallons of water user per week (450 gallons)!";
    }

}
