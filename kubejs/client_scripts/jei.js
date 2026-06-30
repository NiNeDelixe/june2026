RecipeViewerEvents.removeEntries('item', event => {
	event.remove(/zombie_extreme:.*/)
	event.remove(/undead_revamp2:.*/)
	event.remove(/fancytrinkets:.*/)
	event.remove(/mapperbase:.*/)
	event.remove(/embellishcraft:.*_wooden_crate/)
	event.remove(/createbigcannons:bronze_.*/)
	event.remove(/createbigcannons:unbored_bronze_.*/)
	event.remove('/spawn_egg/')
	global.removal.forEach(itemName => {
		event.remove(itemName)
	})
})
