export default class ScoreboardView{
    constructor(root, nameOne, nameTwo, onControlButtonClicked) {
        this.root = root;
        console.log(this.root);
        this.root.innerHTML = `
            
        
            <div class="row justify-content-center pict-wrapper mb-5 " ">
                <button class=" the-pict the-btn col-6" data-for-player="one"><img src="img/zyro-image.png" style="width: 200px" alt=""></button>
                <button class=" the-pict the-btn col-6" data-for-player="two"><img src="img/zyro-image%20(1).png" style="width: 200px" alt=""></button>
            </div>
       
            <div class="d-flex flex-row justify-content-center mt-5 score-wrapper">
                <p class="display-1 score-one the-score fw-semibold " data-for-player="one">0</p>
                <p class="display-1 score-two the-score fw-semibold " data-for-player="two">0</p>
            </div>
            <div class="container mt-3">
             <div class="d-flex flex-row  min-btn-wrapper">
            <button class=" the-btn-min min-btn text-white bg-danger " data-for-player="one">-</button>
           <button class=" the-btn-min   min-btn text-white bg-danger " data-for-player="two">-</button>
           </div>
</div>
           `;

        this.root.querySelectorAll(".the-btn").forEach(controlButton =>{
            controlButton.addEventListener("click", () =>{
                const direction = controlButton.textContent === "-" ? "minus" : "plus";
                const player = controlButton.closest(".the-btn").dataset.forPlayer;

               onControlButtonClicked(player, direction);
            });
        });
    }

    update(playerOneScore, playerTwoScore) {
        this.root.querySelector(".the-score[data-for-player='one']").textContent = playerOneScore;
        this.root.querySelector(".the-score[data-for-player='two']").textContent = playerTwoScore;
    }
}