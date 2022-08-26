document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerInputField = document.getElementById("player-field").value;
    const playerCost = playerInputField * liArray.length;
    const playerTotalCost = document.getElementById("player-cost").innerHTML = playerCost;

    document.getElementById("total-calculate-btn").addEventListener("click", function () {
        const managerFeeString = document.getElementById("manager-fee-field").value;
        const managerFee = parseInt(managerFeeString);
        const coachFeeString = document.getElementById("coach-fee-field").value;
        const coachFee = parseInt(coachFeeString);
        const totalCost = playerCost + managerFee + coachFee;
        document.getElementById("total-cost").innerHTML = totalCost;
    })

})