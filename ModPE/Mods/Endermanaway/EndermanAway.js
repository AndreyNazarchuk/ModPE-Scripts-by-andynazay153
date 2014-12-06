//I plan to make it kill enderman on spawn
function entityAddedHook(entity) {
    if (Entity.getEntityTypeId(entity) == 39) {
        clientMessage("Watch out, an EnderMan has spawned!");
		Entity.remove(entity);
		Entity.remove();
		clientMessage("Killed it!");
    }
}