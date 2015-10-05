var React = require('react');


module.exports = React.createClass({
	render: function(){
		console.log('rendered');
		if (this.props.user===null) {
			return(
				<nav>
				    <div className="nav-wrapper">
				    	<a href="#" className="logo"><span>LogoHere</span></a>
				    	<ul id="nav-mobile" className="right">
							<li><a href="#">Home</a></li>
				        	<li><a href="#dashboard">DASHBOARD</a></li>
				        	
				      	</ul>
				    </div>
				</nav>
			);
		}
		else{
			return(
				<nav>
				    <div className="nav-wrapper">
				    	<a href="#" className="logo"><span>LogoHere</span></a>
				    	<ul id="nav-mobile" className="right">
							<li><a href="#">Home</a></li>
				        	<li><a href="#login">Log In</a></li>
				        	<li><a href="#register">Register</a></li>
				      	</ul>
				    </div>
				</nav>
			);
		}
	}
})