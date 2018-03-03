/*
function Animation(spriteSheet, startX, startY, frameWidth, frameHeight, frameDuration,
    frames, loop, reverse, saveLast, readyFrames) 
    */
function Ryu(game, x, y) {
    this.name = "Ryu";
    this.velocity = { x: 200, y: 50 };

    //this.actualWidth = 50;
    //this.actualHeight = 90;

    this.punchFrames = [new Frame(5, 170, 50, 100), new Frame(58, 170, 72, 100)];
    this.punchFrames2 = [new Frame(5, 170, 50, 100), new Frame(58, 170, 72, 100)];
    this.punchFrames3 = [new Frame(434, 170, 53, 100), new Frame(490, 170, 59, 100), new Frame(554, 170, 75, 100), new Frame(490, 170, 59, 100), new Frame(434, 170, 53, 100)];

    this.kickFrames = [new Frame(145, 315, 50, 90), new Frame(5, 315, 58 , 90), new Frame(75, 315, 60 , 90), new Frame(5, 315, 58 , 90), new Frame(145, 315, 50, 90)];

    this.blockFrames = [new Frame(345, 647, 45, 732)];

    this.jumpFrames = [new Frame(65, 468, 50, 100), new Frame(135, 415, 50 , 80), new Frame(195, 440, 50, 100)];

    this.idleRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 163, 40, 50, 100, 0.15, 4, true, false, false, null);
    this.idleLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1937, 40, 50, 100, 0.15, 4, true, true, false, null);

    this.moveRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 48, 646, 49, 86, 0.15, 4, true, true, false, null);
    this.moveLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 2056, 646, 49, 86, 0.15, 4, true, true, false, null);

    this.crouchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 549, 642, 50, 100, 0.15, 1, true,  false, false, null);
    this.crouchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1701, 642,  50, 100, 0.15, 1, true,  true, false, null);

    this.punchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 5, 160, 50, 100, 0.15, this.punchFrames.length, false, false, false, this.punchFrames)
    this.punchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 5, 160, 50, 100, 0.15, this.punchFrames.length, false, true, false, this.punchFrames);

    this.punchRight2Animation = new Animation(AM.getAsset("./img/Ryu.png"), 5, 160, 50, 100, 0.15, this.punchFrames2.length, false, false, false, this.punchFrames2);
    this.punchLeft2Animation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 5, 160, 50, 100, 0.15, this.punchFrames2.length, false, true, false, this.punchFrames2);

    this.punchRight3Animation = new Animation(AM.getAsset("./img/Ryu.png"), 434, 170, 53, 100, 0.15, this.punchFrames3.length, false, false, false, this.punchFrames3);
    this.punchLeft3Animation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 434, 170, 53, 100, 0.15, this.punchFrames3.length, false, true, false, this.punchFrames3);

    this.kickRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 145, 315, 50, 100, 0.15, this.kickFrames.length, false, false, false, this.kickFrames);
    this.kickLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 145, 315, 50, 100, 0.15, this.kickFrames.length, false, true, false, this.kickFrames);

    this.blockRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 345, 647, 45, 85, 0.15, this.blockFrames.length, false, false, true, this.blockFrames);
    this.blockLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 345, 647, 45, 85, 0.15, this.blockFrames.length, false, true, false, this.blockFrames);

    this.blockCrouchRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 395, 640, 45, 90, 0.07, 1, false, false, true, null);
    this.blockCrouchLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 1705, 640, 45, 90, 0.07, 1, false, true, true, null);

    this.jumpRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 195, 440, 50, 100, 0.3, this.jumpFrames.length, false, false, false, this.jumpFrames, 50, 90);
    this.jumpLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 195, 440, 50, 100, 0.3, this.jumpFrames.length, false, true, false, this.jumpFrames, 50, 90);

    // this.jumpKickRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"),
    //     1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, false, true, this.jumpKickFrames);

    // this.jumpKickLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"),
    //     1051, 908, 53, 108, 0.1, this.jumpKickFrames.length, false, true, true, this.jumpKickFrames);

    // this.uppercutRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"),
    //     14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, false, false, this.uppercutFrames);

    // this.uppercutLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"),
    //     14, 907, 58, 128, 0.1, this.uppercutFrames.length, false, true, false, this.uppercutFrames);

    this.attackedRightAnimation = new Animation(AM.getAsset("./img/Ryu.png"), 34, 1625, 55, 85, 0.14, 2, false, false, false, null);
    this.attackedLeftAnimation = new Animation(AM.getAsset("./img/RyuFlipped.png"), 2156, 1625, 55, 85, 0.1, 2, false, true, false, null);

    this.currentAnimation = this.idleRightAnimation;
    //Ryu's movement speed.
    this.speed = 5;
    
    //Ryu's states.
    this.movingRight = false;
    this.movingLeft = false;
    this.idling = true;
    this.crouching = false;
    
    this.facing = "R";

    this.punching = false;
    this.punching2 = false;
    this.punching3 = false;

    this.kicking = false;

    this.blocking = false;
    this.jumping = false;

    //this.jumpKicking = false;

    this.uppercutting = false;

    this.isBot = false;

    this.boxWidth = 58;
    this.boxHeight = 128;

    this.gettingAttacked = false;

    this.scaleBy = 3;

    this.currentBox = (50, 420, 58 * this.scaleBy, 128 * this.scaleBy);


    this.attackDamageMap = new Map();

    this.attackDamageMap.set(this.punching, 0.5);
    this.attackDamageMap.set(this.punching2, 0.3);
    this.attackDamageMap.set(this.punching3, 0.15);
    this.attackDamageMap.set(this.kicking, 0.4);
    this.attackDamageMap.set(this.kicking2, 0.2);

    this.xView = x;
    this.yView = y;

    Entity.call(this, game, x, y);
}

Ryu.prototype = new Entity();
Ryu.prototype.constructor = Ryu;

var count = 0;
var count2 = 0
Ryu.prototype.update = function() {
    if (!this.isBot) {
        
        if (!this.game.crouch) {
            this.crouchRightAnimation.elapsedTime = 0;
            this.crouchLeftAnimation.elapsedTime = 0;
        }
        if (!this.game.block) {
            this.blockLeftAnimation.elapsedTime = 0;
            this.blockRightAnimation.elapsedTime = 0;
        }
        if (this.game.jump) {
            this.jumping = true;
            this.game.block = null;
            this.blocking = false;
            if (this.game.jumpKick) {
                //this.jumpKicking = true;
            }
        } else if (this.game.punch) {
            //console.log("you pressed punch key");
            this.punching = true;
            this.movingLeft = false;
            this.idling = false;
            this.crouching = false;
            this.movingRight = false;
            this.blocking = false;
        } else if (this.game.punch2) {
            this.punching2 = true;
            this.movingLeft = false;
            this.idling = false;
            this.crouching = false;
            this.movingRight = false;
            this.blocking = false;
        } else if (this.game.punch3) {
            this.punching3 = true;
            this.movingLeft = false;
            this.idling = false;
            this.crouching = false;
            this.movingRight = false;
            this.blocking = false;
        } else if (this.game.kick) {
        this.kicking = true;
        this.movingLeft = false;
        this.idling = false;
        this.crouching = false;
        this.movingRight = false;
        this.blocking = false;
        } /*
        else if (this.game.kick2) {
            this.kicking2 = true;
            this.movingLeft = false;
            this.idling = false;
            this.crouching = false;
            this.movingRight = false;
            this.blocking = false;
        } */else if (this.game.block) {

            this.blocking = true;
            this.movingLeft = false;
            this.idling = false;
            //this.crouching = false;
            this.movingRight = false;
            if (this.game.crouch) {
                this.crouching = true;
            } else {
                this.crouching = false;
            }
        } /*else if (this.game.uppercut) {
            this.uppercutting = true;
        } */else if (this.game.crouch) {
            this.crouching = true;
            this.idling = false;
            this.movingRight = false;
            this.movingLeft = false;
            this.punching = false;
            //this.blocking = false;
            if (this.game.block) {
                this.blocking = true;
            } else {
                this.blocking = false;
            }

        } else if (this.game.moveRight) {
            this.movingRight = true;
            this.idling = false;
            this.crouching = false;
            this.movingLeft = false;
            this.punching = false;
            this.blocking = false;
            this.facing = "R";
        } else if (this.game.moveLeft) {
            this.movingLeft = true;
            this.idling = false;
            this.crouching = false;
            this.movingRight = false;
            this.punching = false;
            this.blocking = false;
            this.facing = "L";
        //} else if (this.game.jump) {
        //  this.jumping = true;
        //  this.idling = false;
        //  this.crouching = false;
            //this.movingRight = false;
        //  this.punching = false;
        //  this.blocking = false;
        }else  if (!this.game.moveRight && !this.game.crouch && !this.game.moveLeft
                    && !this.game.punch) {
            this.idling = true;
            this.movingRight = false;
            this.crouching = false;
            this.movingLeft = false;
            this.punching = false;
            this.blocking = false;
        } 



        //FUN EASTER EGG STUFF, BETTER TO REMOVE in prototype!
        //ULTRA SPEED is activated when "U" key is pressed
        //and deactivated when "U" is pressed again
        /*if (this.game.ultraSpeed) {
            this.speed += 0.1;
        } else {
            this.speed = 5;
        }*/

         if (this.gettingAttacked) {
            if (this.blocking) {
                if (this.facing === "R") {
                    if (this.crouching) {
                        this.currentAnimation = this.blockCrouchRightAnimation;
                    } else {
                        this.currentAnimation = this.blockRightAnimation;
                    }
                } else {
                    if (this.crouching) {
                        this.currentAnimation = this.blockCrouchLeftAnimation;
                    } else {
                        this.currentAnimation = this.blockLeftAnimation;
                    }
                }
            } else {
                this.currentAnimation = this.facing === "L" ? this.attackedLeftAnimation : this.attackedRightAnimation;
                if (this.currentAnimation.isDone()) {
            
                    this.currentAnimation.elapsedTime = 0;
                    this.gettingAttacked = false;
                    //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
                }
            }   
        } else  if (this.blocking) {
            if (this.facing === "R") {
                if (this.crouching) {

                    this.currentAnimation = this.blockCrouchRightAnimation;
                    
                } else {
                    this.currentAnimation = this.blockRightAnimation;
                }
            } else {
                if (this.crouching) {
                    this.currentAnimation = this.blockCrouchLeftAnimation;
                } else {
                    this.currentAnimation = this.blockLeftAnimation;
                }
            }
        } else if (this.punching) {
            if (this.facing === "R") {
                this.currentAnimation = this.punchRightAnimation;
                if(this.punchRightAnimation.elapsedTime > .2){
                }
                if (this.punchRightAnimation.isDone()) {
                    this.punchRightAnimation.elapsedTime = 0;
                    this.punching = false;
                    this.game.punch = null;
                }
            } else if (this.facing === "L") {
                if (this.punchLeftAnimation.isDone()) {
                    this.punchLeftAnimation.elapsedTime = 0;
                    this.punching = false;
                    this.game.punch = null;
                }
                this.currentAnimation = this.punchLeftAnimation;
                if(this.punchLeftAnimation.elapsedTime > .2){
                }
            }
        } else if (this.punching2) {
            if (this.facing === "R") {
                this.currentAnimation = this.punchRight2Animation;
                if(this.punchRight2Animation.elapsedTime > .2){
                }
                if (this.punchRight2Animation.isDone()) {
                    this.punchRight2Animation.elapsedTime = 0;
                    this.punching2 = false;
                    this.game.punch2 = null;
                }
            } else if (this.facing === "L") {
                this.currentAnimation = this.punchLeft2Animation;
                if(this.punchLeft2Animation.elapsedTime > .2){
                }
                if (this.punchLeft2Animation.isDone()) {
                    this.punchLeft2Animation.elapsedTime = 0;
                    this.punching2 = false;
                    this.game.punch2 = null;
                }
            }
        } else if (this.punching3) {
            if (this.facing === "R") {
                this.currentAnimation = this.punchRight3Animation;
                if(this.punchRight3Animation.elapsedTime > .2){
                }
                if (this.punchRight3Animation.isDone()) {
                    this.punchRight3Animation.elapsedTime = 0;
                    this.punching3 = false;
                    this.game.punch3 = null;
                }
            } else if (this.facing === "L") {
                this.currentAnimation = this.punchLeft3Animation;
                if(this.punchLeft3Animation.elapsedTime > .2){
                }
                if (this.punchLeft3Animation.isDone()) {
                    this.punchLeft3Animation.elapsedTime = 0;
                    this.punching3 = false;
                    this.game.punch3 = null;
                }
            }
        } else if (this.kicking) {
            if (this.facing === "R") {
                this.currentAnimation = this.kickRightAnimation;
                if(this.kickRightAnimation.elapsedTime > .4){
                }
                if (this.kickRightAnimation.isDone()) {
                    
                    this.kickRightAnimation.elapsedTime = 0;
                    this.kicking = false;
                    this.game.kick = false;
                }
            } else if (this.facing === "L") {
                this.currentAnimation = this.kickLeftAnimation;
                if(this.kickLeftAnimation.elapsedTime > .4){
                }
                if (this.kickLeftAnimation.isDone()) {
                    this.kickLeftAnimation.elapsedTime = 0;
                    this.kicking = false;
                    this.game.kick = false;
                }
            }
        } /* else if(this.kicking2) {
            if (this.facing === "R") {
                this.currentAnimation = this.kickRight2Animation;
                if(this.kickRight2Animation.elapsedTime > .2){
                    hitsnd.play();
                }
                if (this.kickRight2Animation.isDone()) {
                    this.kickRight2Animation.elapsedTime = 0;
                    this.kicking2 = false;
                    this.game.kick2 = false;
                }
            } else if (this.facing === "L") {
                this.currentAnimation = this.kickLeft2Animation;
                if(this.kickLeft2Animation.elapsedTime > .2){
                    hitsnd.play();
                }
                if (this.kickLeft2Animation.isDone()) {
                    this.kickLeft2Animation.elapsedTime = 0;
                    this.kicking2 = false;
                    this.game.kick2 = false;
                }
            }
        } */ else if (this.jumping) {
            if (this.facing === "R") {
                if (this.jumpKicking) {
                    this.currentAnimation.readyFrames = this.jumpKickFrames;
                } else {
                    this.currentAnimation = this.jumpRightAnimation;
                    
                }

                if (this.currentAnimation.isDone()) {
                    //this.jumpRightAnimation.readyFrames = null;
                    //this.jumpKickRightAnimation.elapsedTime = 0;
                    this.jumpRightAnimation.elapsedTime = 0;
                    this.jumping = false;
                    this.jumpKicking = false;
                    this.game.jumpKick = null;
                    this.game.jump = null;
                }

                console.log("Ryus move right " +  this.movingRight);
                if (this.movingRight && this.x < 650) {
                    this.x += this.speed;
                }

                
            } else if (this.facing === "L") {
                if (this.jumpKicking) {
                    this.currentAnimation.readyFrames = this.jumpKickFrames;
                } else {
                    this.currentAnimation = this.jumpLeftAnimation;
                }
                if (this.currentAnimation.isDone()) {
                    //this.jumpLeftAnimation.readyFrames = null;
                    this.jumpLeftAnimation.elapsedTime = 0;
                    //this.jumpKickLeftAnimation.elapsedTime = 0;
                    this.jumpKicking = false;
                    this.jumping = false;
                    this.game.jumpKick = null;
                    this.game.jump = null;
                }
                if (this.movingLeft && this.x >= 0) {
                    this.x -= this.speed;
                }

                if ((this.x >= 0 && this.x < 640) || (this.x > 3200 && this.x < 3720)) {
                    this.xView += -1 * (this.speed);
                }
            }
            var jumpDistance = this.currentAnimation.elapsedTime / this.currentAnimation.totalTime;
                var totalHeight = 360;
                if (jumpDistance > 0.5) {
                    jumpDistance = 1 - jumpDistance;
                }
                var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
                this.y = 420 - height;
        }/* else if (this.uppercutting) {
            if (this.facing === "R") {
                this.currentAnimation = this.uppercutRightAnimation;
                if(this.uppercutRightAnimation > .2) {
                    hitsnd.play();
                }
                if (this.currentAnimation.isDone()) {
                    this.uppercutRightAnimation.elapsedTime = 0;
                    this.uppercutting = false;
                    this.game.uppercut = null;
                }
            } else {
                this.currentAnimation = this.uppercutLeftAnimation;
                if(this.uppercutLeftAnimation > .2) {
                    hitsnd.play();
                }
                if (this.currentAnimation.isDone()) {
                    this.uppercutLeftAnimation.elapsedTime = 0;
                    this.uppercutting = false;
                    this.game.uppercut = null;
                }
            }
        } */else if (this.movingRight) {
            this.currentAnimation = this.moveRightAnimation;

            if ((this.x < 650)) {
                this.x += this.speed;
            }   

            
            
        } else if (this.movingLeft) {
            this.currentAnimation = this.moveLeftAnimation;

            if (this.x >= 0) {
                this.x += -1 * (this.speed);
            }

        } else  if (this.crouching === true) {
            if (this.facing === "R") {
                this.currentAnimation = this.crouchRightAnimation;
                
                
            } else {
                if (this.uppercutting) {
                    
                } else {
                    this.currentAnimation = this.crouchLeftAnimation;
                    
                    
                }
            }
        } else  {
            if (this.facing === "R") {
                this.currentAnimation = this.idleRightAnimation;
            } else {
                this.currentAnimation = this.idleLeftAnimation;
            }
        }
        //var heightDiff = this.boxHeight - this.currentAnimation.getFrameHeight();
        //this.y = heightDiff === 0 ? this.y : this.y + (heightDiff * this.scaleBy);
        //this.currentAnimation.getFrameWidth();
        //this.currentAnimation.getFrameHeight();
        
        //console.log("my x is: " + this.x);
        //console.log("myHeight is: " + this.currentAnimation.getFrameHeight());
        //console.log("myWidth is:  " + this.currentAnimation.getFrameWidth());

    } else {
        // if (!this.gettingAttacked) {
        //  var next = Math.random();
            
        //      this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
        // }
    }

    //console.log("my y is: " + this.currentAnimation.getY(this.y, this.scaleBy) + 
            //"\n my x is: " + this.x + "\n myHeight is: " + this.currentAnimation.getFrameHeight() * this.scaleBy + 
        //"\n myWidth is:  " + this.currentAnimation.getFrameWidth() * this.scaleBy);

    //Detect collision with other entities
    var range = 116
    if(count > 2000){
        count = 0;
    }
    for (var i = 0; i < this.game.entities.length; i++) {
        var ent = this.game.entities[i];
        if(!(this.isBot)){
                //console.log("COUNT "+count)

                //BOTS ATTACK LOGIC
                //Player on the right
                if (ent !== this && ent.currentBox && this.collide(ent)) {
                    if(this.game.kick && this.currentAnimation.isDone()) {
                        attack = true;
                    } else {
                        attack = false;
                    }

                    console.log("asd" + Math.abs(this.x - ent.x));
                    if (this.x > ent.x && Math.abs(this.x - ent.x) < range) {
                        
                        count++;
        
                        if(count % 30 == 0) {
                            rand = Math.floor(Math.random() * 3);
                        }
                        //console.log("Right");
                        if(this.kicking){
                            attack = true;
                            console.log("kicking");
                            //ent.gettingAttacked == true;
                        }
                        if(!this.isAttacking()){
                            
                            console.log("Here's the random number "+ rand);
                            //var rand = Math.floor(Math.random() * 3);
                            if(rand === 0){
                                ent.currentAnimation = ent.kickRightAnimation;
                                if (this.blocking) {
                                    ent.attackHandler(this, 0.3);
                                } else {
                                    ent.attackHandler(this, 1);
                                    this.gettingAttacked = true;
                                }
                                console.log("Elapsed " + ent.game.clockTick);
                                if(ent.currentAnimation.isDone()) {
                                    console.log("I'm done kicking right");
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
                            if(rand === 1){
                                ent.currentAnimation = ent.punchRightAnimation;
                                if (this.blocking) {
                                    ent.attackHandler(this, 0.3);
                                } else {
                                    ent.attackHandler(this, 1);
                                }
                                if(ent.currentAnimation.isDone()) {
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
                            if(rand === 2) {
                                ent.currentAnimation = ent.blockRightAnimation
                                if(ent.currentAnimation.isDone()) {
                                    
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
        
                            
                        } else {
                            ent.currentAnimation =  ent.attackedRightAnimation;
                            if (ent.isBlocking) {
                                this.attackHandler(ent, 0.3)
                            } else {
                                this.attackHandler(ent, 1);
                            }
                            if (ent.currentAnimation.isDone()) {
            
                                ent.currentAnimation.elapsedTime = 0;
                                ent.gettingAttacked = false;
                                this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleRightAnimation;
                            }   
                        }
                        
                        //ent.velocity = 0;

                        //Player on the left
                    } if (this.x < ent.x && (Math.abs(this.x - ent.x) < range+60)) {
                        
                        if(count2 % 50 == 0) {
                            rand2 = Math.floor(Math.random() * 3);
                        }
                        count2++;
                        if(!this.isAttacking()){
                            
                            if(rand2 == 0){
                                console.log("Left");
                                ent.currentAnimation = ent.kickLeftAnimation
                                if (this.blocking) {
                                    ent.attackHandler(this, 0.3);
                                } else {
                                    ent.attackHandler(this, 1);
                                }
                                console.log("Elapsed " + ent.game.clockTick)
                                if(ent.currentAnimation.isDone()) {
                                    console.log("I'm done kicking right")
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
                            if(rand2 == 1){
                                
                                ent.currentAnimation = ent.punchLeftAnimation;
                                if (this.blocking) {
                                    ent.attackHandler(this, 0.3);
                                } else {
                                    ent.attackHandler(this, 1);
                                }
                                if(ent.currentAnimation.isDone()) {
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
                            if(rand2 == 2) {
                                ent.currentAnimation = ent.blockLeftAnimation;

                                if(ent.currentAnimation.isDone()) {
                                    
                                    //rand = Math.floor(Math.random() * Math.floor(2))
                                }
                            }
                            
                        } else {
                            ent.currentAnimation =  ent.attackedLeftAnimation;
                            if (ent.isBlocking) {
                                this.attackHandler(ent, 0.3)
                            } else {
                                this.attackHandler(ent, 1);
                            }
                            if (ent.currentAnimation.isDone()) {
            
                                ent.currentAnimation.elapsedTime = 0;
                                ent.gettingAttacked = false;
                                //this.currentAnimation = this.facing === "L" ? this.idleLeftAnimation : this.idleAnimation;
                            }   
                        }
                    }
                    // Ryu.prototype.isAttacking = function() {
                    //     return (this.punching || this.punching2 || this.punching3
                    //         || this.kicking || this.kicking2 || this.uppercutting
                    //         || this.jumpKicking);
                    //}
                    //this.attackHandler(ent, 0.3);
                    //this.x += this.velocity.x * this.game.clockTick;
                    //this.y += this.velocity.y * this.game.clockTick;
                    //ent.x += ent.velocity.x * this.game.clockTick;
                    //ent.y += ent.velocity.y * this.game.clockTick;
        
                    //console.log("They collide!");
                }
               
               //BOTS FOLLOW LOGIC
                if(ent !== this && ent.currentBox && !(this.collide(ent))){
                    //attack == false;
                    //console.log("THE NUMBER " + Math.abs(this.x - ent.x))
                    //console.log(this.x < ent.x);
                    //console.log("IF " + (Math.abs(this.x - ent.x) < range));
                    //this.x += this.velocity.x * this.game.clockTick;
                    // console.log("Box " +ent.currentBox);
                    // console.log("Goku " +this.x);
                    // console.log("Ryu "+ ent.x);
                    if(this.x < ent.x && !(Math.abs(this.x - ent.x) < range)) {
                        ent.facing = "L";
                        ent.currentAnimation = ent.moveLeftAnimation;
                        ent.x -= ent.speed;
                    }
                    else if(this.x > ent.x && !(Math.abs(this.x - ent.x) < range-10)) {
                        ent.facing = "R";
                        ent.currentAnimation = ent.moveAnimation
                        ent.x += ent.speed;
                    }
                    if(this.game.kick && this.currentAnimation.isDone()) {
                        attack = true;
                    } else {
                        attack = false;
                    }
                    
                    
                    
        
                }
            

        }
        // if (ent !== this && ent.currentBox && this.collide(ent)) {
        //  console.log("They collide!");

        //  if (this.isAttacking()) {
        //      if (this.facing === "R" && this.isToTheLeftOf(ent)) {
        //          if (!ent.blocking) {
        //              this.attackHandler(ent, 1);
        //          } else {
        //              this.attackHandler(ent, 0.3);
        //          }
        //          ent.facing = "L";
        //      } else if (this.facing === "L" && !this.isToTheLeftOf(ent)) {
        //          if (!ent.blocking) {
        //              this.attackHandler(ent, 1);
        //          } else {
        //              this.attackHandler(ent, 0.3);
        //          }
        //          ent.facing = "R";
        //      }
        //  }
        // }
    }

    if (!this.isBot) {
        // console.log("blocking is: " + this.blocking);
    }
    Entity.prototype.update.call(this);
}

Ryu.prototype.collide = function(other) {
    return this.currentBox.collide(other.currentBox);
}

Ryu.prototype.isAttacking = function() {
    return (this.punching || this.punching2 || this.punching3
        || this.kicking || this.kicking2 || this.uppercutting
        || this.jumpKicking);
}

Ryu.prototype.isToTheLeftOf = function(other) {
    return (this.x < other.x);
}

Ryu.prototype.getAttackType = function() {
    if (this.punching) {
        return this.punching;
    } else if (this.punching2) {
        return this.punching2;
    } else if (this.punching3) {
        return this.punching3;
    } else if (this.kicking) {
        return this.kicking;
    } else if (this.kicking2) {
        return this.kicking2;
    } else {
        return false;
    }
}

Ryu.prototype.attackHandler = function(other, mult) {
    if (!this.isBot) {
        mult *= 4;
    } else {
        mult *= 2;
    }
    if (this.currentAnimation === this.punchRightAnimation
        || this.currentAnimation === this.punchLeftAnimation) {
        other.healthBar.hp -= 0.05 * mult;
    } else if (this.currentAnimation === this.punchRight2Animation
        || this.currentAnimation === this.punchLeft2Animation) {
        other.healthBar.hp -= 0.05 * mult;
    } else if (this.currentAnimation === this.punchRight3Animation
        || this.currentAnimation === this.punchLeft3Animation) {
        other.healthBar.hp -= 0.0625 * mult;        
    } else if (this.currentAnimation === this.kickRightAnimation
        || this.currentAnimation === this.kickLeftAnimation) {
        other.healthBar.hp -= 0.05 * mult;  
    } else if (this.currentAnimation === this.kickRight2Animation
        || this.currentAnimation === this.kickLeft2Animation) {
        other.healthBar.hp -= 0.05 * mult;
    } else if (this.currentAnimation === this.uppercutRightAnimation
        || this.currentAnimation === this.uppercutLeftAnimation) {
        other.healthBar.hp -= 0.09 * mult;
    }
    
        other.gettingAttacked = true;
    
}

Ryu.prototype.draw = function (ctx, xView, yView) {
    if (!this.isBot) {
        this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x, this.y - yView, this.scaleBy);
    } else {
        this.currentAnimation.drawFrame(this.game.clockTick, ctx, this.x , this.y - yView, this.scaleBy);
    }
    Entity.prototype.draw.call(this);
}
