module.exports = {
	name: "LancsBattingL3_small",
	description: "Small Batting Lower third for Lancashire",
	category: "Cricket",
	icon: "image",
	hasEntries: true,
	multipleVisibleEntries: false,
	default: {
		style: {
			horizontal_position: "center",
			vertical_position: "center",
			global_padding: "",
			widget_offset: "",
			width: "100",
			height: "100",
			widget_padding: "0"
		},
	},


	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		},

	],

	entry_props: [
		{
			name: "Entry Name",
			description: "Entry Name",
			type: "String"
		},
		{
			name: "BattersName",
			description: "Batters Name",
			type: "String"
		},
		{
			name: "balls",
			description: "balls",
			type: "String"
		},
		{
			name: "Stat1",
			description: "Stat 1",
			type: "String"
		},
		{
			name: "fours",
			description: "fours",
			type: "String"
		},
		{
			name: "Stat2",
			description: "Stat 2",
			type: "String"
		},
		{
			name: "six",
			description: "six",
			type: "String"
		},
		{
			name: "Stat3",
			description: "Stat 3",
			type: "String"
		},
		{
			name: "strikeRate",
			description: "strikeRate",
			type: "String"
		},
		{
			name: "Stat4",
			description: "Stat 4",
			type: "String"
		},
		{
			name: "minutes",
			description: "minutes",
			type: "String"
		},
		{
			name: "Stat5",
			description: "Stat 5",
			type: "String"
		},
		{
			name: "runs",
			description: "runs",
			type: "String"
		},


	],


	vue_template: getFile("LancsBattingL3.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}

