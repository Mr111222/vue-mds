	const fs = require('fs-extra')
	const modules = require('./src/router/modules.js')
	
	modules.forEach(function (item) {
	  fs.copySync(`../xxxx-${item}/README.md`, `src/docs/${item}.md`)
	})

	modules.forEach(function (item) {
	  fs.copySync(`../xxxx-${item.child.cpath}/.vue`, `src/components/${item}.md`)
	})
