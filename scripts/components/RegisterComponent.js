var React = require('react');

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
					<h2>Register for a new profile here...</h2>
					<p>{this.state.error}</p>
	  				<div className="row">
						<div className="input-field col s6">
		 					<input placeholder="Email" ref="email" type="text" className="validate" />
						</div>
	  				</div>
	  				<div className="row">
						<div className="input-field col s6">
		  					<input placeholder="password" ref="password" type="password" className="validate" />
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
		var email = this.refs.email.getDOMNode().value;
		var password = this.refs.password.getDOMNode().value;

		var user = new Parse.User();
		user.set('username', email);
		user.set('password', password);
		user.set('email', email);

		user.signUp(null, {
			success: (user) => {
				console.log('success', user);
				this.setState({
					error: null
				});
				this.props.router.navigate('',{trigger: true});
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