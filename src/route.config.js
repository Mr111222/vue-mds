/* eslint-disable */
import navs from "./nav.config.json";
import home from './views/index.vue'
const load = function(path) {
  return r => require.ensure([], () =>
    r(require(`./pages${path}.vue`))
    );
};

const loadDocs = function(path) {
  return r => require.ensure([], () =>
    r(require(`./docs${path}.md`))
    );
};

const loadCom = function(path) {
  return r => require.ensure([], () =>
    r(require(`./components${path}.vue`))
    );
};
const registerRoutes = function() {
	const routes = Object.keys(navs).map(key => {
		const nav = navs[key];
		let route = {
			path: nav.path,
			component: load(nav.path),
			children: []
		}
		if(nav.groups){
			nav.groups.forEach(group => {
				const list = group.list;
				list.forEach(item => {
					if(item.child){
						route.children.push({
							path: item.child.cpath.slice(1),
							//component: loadCom(item.child.cpath),
							component: home,
							meta: {
								title: item.child.ctitle
							}
						})
					}
					route.children.push({
						path: item.path.slice(1),
						component: loadDocs(item.path),
						meta: {
							title: item.title
						}
					})
				})
				
			})
		}
		// route.push({
		//   path: '/',
		//   component: load(nav.path)
		// })
		return route;
	})
	return routes;
}


const routes = registerRoutes();
//redirect
routes.push({
  path: '/', redirect: 'component'
})
console.log(routes,111111111)
export default routes;