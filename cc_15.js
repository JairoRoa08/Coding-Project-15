// Task #1: Creating the Base Structure
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task #2: Adding Risk Items Dynamically
function addRiskItem(riskName, riskLevel, department) {
    const riskCard = document.createElement("div"); // Creating a new div
    riskCard.classList.add("riskCard"); // Assigning riskCard class

// Task #4: Categorizing Risks by Level
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
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Risk Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${department}</p>
        <button class="resolveBtn">Resolve</button>
    `;
    riskDashboard.appendChild(riskCard);// Append the risk card to the dashboard

// Task #3: Removing Risk Items
    riskCard.querySelector(".resolveBtn").addEventListener("click", function () {
        riskCard.remove();
    });
// Task #6: Handling Event Propagation
    riskCard.addEventListener("click", function (event) {
        event.stopPropagation(); 
    });
}
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault();// Form Submission

    const riskName = document.getElementById("riskInput").value; 
    const riskLevel = prompt("Risk level (Low, Medium, High):", "Medium"); // Get input values

    const department = prompt("Department:", "General");

    if (riskName && riskLevel && department) {
        addRiskItem(riskName, riskLevel, department);// Add the risk item to the dashboard
    }
    document.getElementById("riskInput").value = "";
});
// Task #5: Implementing Bulk Updates
function increaseRiskLevels() {
    document.querySelectorAll(".riskCard").forEach((card) => {
        let riskLevelElement = card.querySelector("p:nth-of-type(1)"); 
        let currentRiskLevel = riskLevelElement.textContent.split(": ")[1]; // Current risk level
        let newRiskLevel = currentRiskLevel;// Determine new risk level
        if (currentRiskLevel === "Low") {
            newRiskLevel = "Medium";
            card.style.backgroundColor = "yellow"; // Changing color to next
            card.style.color = "black";
        } else if (currentRiskLevel === "Medium") {
            newRiskLevel = "High";
            card.style.backgroundColor = "red"; // Changing color to next
            card.style.color = "white";
        }
        riskLevelElement.textContent = `Risk Level: ${newRiskLevel}`;
    });
}

// Task #5: Increase Risk Levels button
const increaseRiskButton = document.createElement("button");
increaseRiskButton.textContent = "Increase Risk Levels";
increaseRiskButton.addEventListener("click", increaseRiskLevels);
document.body.insertBefore(increaseRiskButton, riskDashboard); 

addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Employee Retention", "Low", "HR");
