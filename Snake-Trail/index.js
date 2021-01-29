window.onload = function() {

    let stage = document.querySelector('#stage');
    let context = stage.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setInterval(game, 80);

    const vel = 1;
    
    let velX = velY = 0;
    let pX = 10;
    let pY = 15;
    let tP = 20;
    let qP = 30;
    let appleX = appleY = 15;
    let score = 0;

    let trail = [];

    tail = 5;

    function game() {

        pX += velX;
        pY += velY;
        if (pX < 0) {
            pX = qP - 1;
        }
        if (pX > qP -1) {
            pX = 0;
        }
        if (pY < 0) {
            pY = qP - 1;
        }
        if (pY > qP -1) {
            pY = 0
        }

        
        context.fillStyle = '#3737a896';
        context.fillRect(0, 0, stage.width, stage.height);

        context.fillStyle = 'orangered';
        context.fillRect(appleX*tP, appleY*tP, tP, tP);
        context.font = "italic 30px Calibri";
        context.fillText(`${score += 0}`, 550, 40);
        


        context.fillStyle = 'orange'
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*tP, trail[i].y*tP, tP, tP);

            if (trail[i].x === pX && trail[i].y === pY) {
                velX = velY = 0;
                tail = 5;
                score = 0;
            }
        }

        trail.push ({x: pX, y: pY});
        while (trail.length > tail) {
            trail.shift();
        }

        if (appleX === pX && appleY === pY) {
            tail++;
            score++;
            appleX = Math.floor(Math.random()*qP);
            appleY = Math.floor(Math.random()*qP);
        }


    }


    function keyPush(event) {

        switch (event.keyCode) {
            case 37: //left
                velX = -vel;
                velY = 0;
                break;
            case 38: //up
                velY = -vel;
                velX = 0;
                break;
            case 39: //right
                velX = vel;
                velY = 0;
                break;
            case 40: //down
                velX = 0;
                velY = vel;
            default:

                break;
        }



    }


}