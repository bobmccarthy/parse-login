'use strict';
var React = require('react');
var Backbone = require('backbone');
window.$ = require('jquery');
window.jQuery=$;


Parse.initialize('0XwQrHyZd7yvbiaqjdIUjAC8amjNVU2YSfUZquJU', 'BGHYPDFO6uFqjA3Dwl3ZfGmMzGgWl95NqRGAgKk7');


var NavComponent = require('./components/NavComponent');
var HomeComponent = require('./components/HomeComponent');
var RegisterComponent = require('./components/RegisterComponent');
var LoginComponent = require('./components/LoginComponent');
var DashboardComponent = require('./components/DashboardComponent');
var nav = document.getElementById('nav');
var main = document.getElementById('main');
var currentUser = Parse.User.current();



var Router = Backbone.Router.extend({
	routes: {
		'': 'home',
		'login': 'login',
		'register': 'register',
		'dashboard': 'dashboard'
		
	},
	home: function(){
		React.render(<HomeComponent />,main);
	},
	login: function() {
		React.render(<LoginComponent router={r} />,main);
	},
	register: function() {
		React.render(<RegisterComponent router={r} />,main);
	},
	dashboard: function(){
		React.render(<DashboardComponent router={r} />, main);
	}
});
var r = new Router();
Backbone.history.start();

if (currentUser){
	React.render(<NavComponent user={null} router={r}/>,nav);
}else{
	React.render(<NavComponent user={true} router={r}/>,nav);
}


