// Task #1:Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task #2:Adding Risk Items Dynamically
function addRiskItem (riskName, riskLevel, department) {
    const riskCard =document.createElement ("div");
    riskCard.classList.add("riskCard");
// Task #4:
    // Apply different background colors based on risk level
    if (riskLevel.toLowerCase() === "high") {
        riskCard.style.backgroundColor = "red";
        riskCard.style.color = "white";
    } else if (riskLevel.toLowerCase() === "medium") {
        riskCard.style.backgroundColor = "yellow";
        riskCard.style.color = "black";
    } else if (riskLevel.toLowerCase() === "low") {
        riskCard.style.backgroundColor = "green";
        riskCard.style.color = "white";
    }

// Inner HTML for risk details
    riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <p><strong>Risk Level:</strong> ${riskLevel}</p>
    <p><strong>Department:</strong> ${department}</p>
`;
// Appending risk card to dashboard
riskDashboard.appendChild(riskCard);
}
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault();
// Get input values
    const riskName = document.getElementById("riskInput").value;
    const riskLevel = prompt("Enter risk level (Low, Medium, High):", "Medium");
    const department = prompt("Enter department:", "General");
// Add the risk to the dashboard
    if (riskName && riskLevel && department) {
        addRiskItem(riskName, riskLevel, department);
    }
});
// Task #3:
riskCard.querySelector(".resolveBtn").addEventListener("click", function () {
    riskCard.remove();
});
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance"); 
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
