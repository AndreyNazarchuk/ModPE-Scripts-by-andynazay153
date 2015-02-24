var arrowPunch = 1;
function procCmd(cmd){
	if(cmd == "far on"){
		arrowPunch = 1;
		}
		else if(cmd == "far off"){
		arrowPunch = 0;
		}
}

if(arrow punch == 1){

function attackHook(attacker, victim){

xa = Entity.getX(attacker);
ya = Entity.getY(attacker) + 20;
za = Entity.getZ(attacker);

var arrow2 = Level.spawnMob(xa+ 1, ya, za, 80);
Entity.setFireTicks(arrow2,5);
Entity.setVelY(arrow2, -4.5);

var arrow3 = Level.spawnMob(xa, ya, za + 1, 80);
Entity.setFireTicks(arrow3,5);
Entity.setVelY(arrow3, -4.5);

var arrow4 = Level.spawnMob(xa - 1, ya, za, 80);
Entity.setFireTicks(arrow4,5);
Entity.setVelY(arrow4, -4.5);

var arrow5 = Level.spawnMob(xa, ya, za - 1, 80);
Entity.setFireTicks(arrow5,5);
Entity.setVelY(arrow5, -4.5);

var arrow6 = Level.spawnMob(xa - 1, ya, za - 1, 80);
Entity.setFireTicks(arrow6,5);
Entity.setVelY(arrow6, -4.5);

var arrow7 = Level.spawnMob(xa + 1, ya, za + 1, 80);
Entity.setFireTicks(arrow7,5);
Entity.setVelY(arrow7, -4.5);

var arrow8 = Level.spawnMob(xa - 1, ya, za + 1, 80);
Entity.setFireTicks(arrow8,5);
Entity.setVelY(arrow8, -4.5);

var arrow9 = Level.spawnMob(xa + 1, ya, za - 1, 80);
Entity.setFireTicks(arrow9,5);
Entity.setVelY(arrow9, -4.5);

var arrow10 = Level.spawnMob(xa + 2, ya, za, 80);
Entity.setFireTicks(arrow10,5);
Entity.setVelY(arrow10, -4.5);

var arrow11 = Level.spawnMob(xa - 2, ya, za, 80);
Entity.setFireTicks(arrow11,5);
Entity.setVelY(arrow11, -4.5);

var arrow12 = Level.spawnMob(xa, ya, za + 2, 80);
Entity.setFireTicks(arrow12,5);
Entity.setVelY(arrow12, -4.5);

var arrow13 = Level.spawnMob(xa, ya, za - 2, 80);
Entity.setFireTicks(arrow13,5);
Entity.setVelY(arrow13, -4.5);

var arrow14 = Level.spawnMob(xa - 2, ya, za - 2, 80);
Entity.setFireTicks(arrow14,5);
Entity.setVelY(arrow14, -4.5);

var arrow15 = Level.spawnMob(xa + 2, ya, za + 2, 80);
Entity.setFireTicks(arrow15,5);
Entity.setVelY(arrow15, -4.5);

var arrow16 = Level.spawnMob(xa - 2, ya, za + 2, 80);
Entity.setFireTicks(arrow16,5);
Entity.setVelY(arrow16, -4.5);

var arrow17 = Level.spawnMob(xa + 2, ya, za - 2, 80);
Entity.setFireTicks(arrow17,5);
Entity.setVelY(arrow17, -4.5);

var arrow18 = Level.spawnMob(xa + 3, ya, za, 80);
Entity.setFireTicks(arrow18,5);
Entity.setVelY(arrow18, -4.5);

var arrow19 = Level.spawnMob(xa, ya, za + 3, 80);
Entity.setFireTicks(arrow19,5);
Entity.setVelY(arrow19, -4.5);

var arrow21 = Level.spawnMob(xa - 3, ya, za, 80);
Entity.setFireTicks(arrow21,5);
Entity.setVelY(arrow21, -4.5);

var arrow22 = Level.spawnMob(xa, ya, za - 3, 80);
Entity.setFireTicks(arrow22,5);
Entity.setVelY(arrow22, -4.5);

var arrow23 = Level.spawnMob(xa - 3, ya, za - 3, 80);
Entity.setFireTicks(arrow23,5);
Entity.setVelY(arrow23, -4.5);

var arrow24 = Level.spawnMob(xa + 3, ya, za + 3, 80);
Entity.setFireTicks(arrow24,5);
Entity.setVelY(arrow24, -4.5);

var arrow25 = Level.spawnMob(xa - 3, ya, za + 3, 80);
Entity.setFireTicks(arrow25,5);
Entity.setVelY(arrow25, -4.5);

var arrow26 = Level.spawnMob(xa + 3, ya, za - 3, 80);
Entity.setFireTicks(arrow26,5);
Entity.setVelY(arrow26, -4.5);
}
}