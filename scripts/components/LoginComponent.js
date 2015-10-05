var React = require('react');
var NavComponent = require('./NavComponent');

module.exports = React.createClass({
	getInitialState: function() {
		return {
			error: null
		};
	},
	render: function(){
		
		
		return(
			<div className="row">
				<form className="col s12" onSubmit={this.onRegister}>
					<h2>Log In To Your Profile</h2>
					<p>{this.state.error}</p>
	  				<div className="row">
						<div className="input-field col s6">
		 					<input placeholder="Email" ref="emailLI" type="text" className="validate" />
						</div>
	  				</div>
	  				<div className="row">
						<div className="input-field col s6">
		  					<input placeholder="password" ref="passwordLI" type="password" className="validate" />
						</div>
	  				</div>
	  				<button className="btn waves-effect waves-light" type="submit" name="action">Submit
    					<i className="material-icons right">send</i>
 					</button>
				</form>
  			</div>
		);
	},
	onRegister: function(e) {
		e.preventDefault();
		Parse.User.logIn(this.refs.emailLI.getDOMNode().value,this.refs.passwordLI.getDOMNode().value , {
  			success: (user) => {
				console.log('success', user);
				this.setState({
					error: null
				});
				React.render(<NavComponent user={user} />,nav);
				this.props.router.navigate('dashboard',{trigger: true});
			},
			error: (user, err) => {
				console.log('error', user, err);
				this.setState({
					error: err.message
				});
			}
		});

	}
	
})