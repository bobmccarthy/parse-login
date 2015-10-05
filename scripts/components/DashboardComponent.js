var React = require('react');
var nav = document.getElementById('nav');
var NavComponent = require('./NavComponent');




module.exports = React.createClass({
	render: function(){
		
		
		return(
			<div>
				<a href="#" className="waves-effect waves-light btn logOut" onClick={this.logOut}>Log Out</a>
				<h2>You Made it to Dashboard</h2>
				<p>Aliquam a risus lorem. In hac habitasse platea dictumst. Vivamus sed efficitur enim. Vivamus nibh sem, tempus at augue vel, pharetra consequat mauris. Pellentesque vitae enim a erat cursus luctus. Vivamus lacinia iaculis mauris id sodales. Sed ac ipsum mattis sem consectetur ultricies.

					Nullam sed iaculis nulla. Aenean varius ex tortor, ut 
					Morbi accumsan ac sem condimentum posuere. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed efficitur interdum ex, ac rhoncus tortor imperdiet a. Pellentesque ornare leo sit amet est pharetra gravida. Duis commodo nulla non odio euismod, at laoreet libero posuere. Vestibulum nunc est, porta quis neque non, scelerisque scelerisque purus. Morbi tincidunt ut tortor ut tempor. Nulla viverra efficitur metus sit amet aliquam. Phasellus tempus pharetra nunc, vel bibendum nunc finibus ac. Fusce arcu tellus, aliquam id justo et, pellentesque fermentum purus. Morbi iaculis, metus sed semper sagittis, diam elit dapibus risus, quis pharetra velit turpis non nisi. Suspendisse laoreet blandit tincidunt. Curabitur ultricies luctus risus eget molestie. Vestibulum euismod in magna eu bibendum. Morbi erat ligula, tristique sed magna at, consectetur blandit lorem. Maecenas dictum et enim sed tincidunt.</p>
				
			</div>

		);
	},
	logOut: function(){
		Parse.User.logOut();
		React.render(<NavComponent user={true} router={this.props.router} />,nav);
		this.props.router.navigate('',{trigger: true});
	}
	
	
	
})