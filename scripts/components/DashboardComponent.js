var React = require('react');
var NavComponent = require('./NavComponent');
var nav = document.getElementById('nav');

React.render(<NavComponent user={null} />,nav);

module.exports = React.createClass({
	render: function(){
		
		
		return(
			<div>
				<button className="logout" onClick={this.logout}>LogOut</button>
				<div>You Made it to Dashboard</div>
				
			</div>

		);
	},
	logout: function(){
		console.log('log out');
		Parse.User.logOut();
		React.render(<NavComponent user={null} />,nav);
		this.props.router.navigate('',{trigger: true});
	}
	
	
})