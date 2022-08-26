document.getElementById("calculate-btn").addEventListener("click", function () {
    const playerInputFields = document.getElementById("player-field");
    const playerInputField = playerInputFields.value;

    const playerCost = playerInputField * liArray.length;
    const playerTotalCost = document.getElementById("player-cost").innerHTML = playerCost;



    document.getElementById("total-calculate-btn").addEventListener("click", function () {
        const managerFees = document.getElementById("manager-fee-field");
        const managerFeeString = managerFees.value;
        const managerFee = parseInt(managerFeeString);
        const coachFees = document.getElementById("coach-fee-field");
        const coachFeeString = coachFees.value;
        const coachFee = parseInt(coachFeeString);
        const totalCost = playerCost + managerFee + coachFee;
        document.getElementById("total-cost").innerHTML = totalCost;

        // managerFees.value = '';
        // coachFees.value = '';
    })
    playerInputFields.value = '';
})