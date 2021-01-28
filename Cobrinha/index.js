window.onload = function() {

    let stage = document.querySelector('#stage');
    let context = stage.getContext('2d');
    document.addEventListener('keydown', keyPush);

    setInterval(game, 80);

    const vel = 1;
    
    let velX = velY = 0;
    let pecX = 10;
    let pecY = 15;
    let lenP = 20;
    let quaP = 30;
    let appX = appY = 15;

    let trail = [];

    tail = 5;

    function game() {

        pecX += velX;
        pecY += velY;
        if (pecX < 0) {
            pecX = quaP - 1;
        }
        if (pecX > quaP -1) {
            pecX = 0;
        }
        if (pecY < 0) {
            pecY = quaP - 1;
        }
        if (pecY > quaP -1) {
            pecY = 0
        }

        context.fillStyle = '#3737a896';
        context.fillRect(0, 0, stage.width, stage.height);

        context.fillStyle = 'orangered';
        context.fillRect(appX*lenP, appY*lenP, lenP, lenP);

        context.fillStyle = 'orange'
        for (let i = 0; i < trail.length; i++) {
            context.fillRect(trail[i].x*lenP, trail[i].y*lenP, lenP, lenP);

            if (trail[i].x === pecX && trail[i].y === pecY) {
                velX = velY = 0;
                tail = 5;
            }
        }

        trail.push ({x: pecX, y: pecY});
        while (trail.length > tail) {
            trail.shift();
        }

        if (appX === pecX && appY === pecY) {
            tail++;
            appX = Math.floor(Math.random()*quaP);
            appY = Math.floor(Math.random()*quaP);
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