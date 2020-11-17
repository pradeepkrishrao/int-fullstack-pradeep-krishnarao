import React from 'react';
import OktaSignIn from '@okta/okta-signin-widget';

export default class LoginPage extends React.Component{
    constructor(){
        super();
        this.state = {user: null};
        this.widget = new OktaSignIn({
            baseUrl: 'https://dev-905268.oktapreview.com',
            clientId: '0oagfe9x2agrYf7P50h7',
            redirectUrl: 'https://https://api.themoviedb.org/4/account/5bacb98392514150eb035c1b/movie/watchlist?page=1',
            authParams: {
                responseType: 'id_token'
            }
        });
        this.showLogin = this.showLogin.bind(this);
        this.logout = this.logout.bind(this);
    }
        componentDidMount(){
        this.widget.session.get((response)=>{
            if(response.status !== 'INACTIVE'){
                this.setState({user:response.login});
            } else{
                this.showLogin();
                
            }
        });
    }
    showLogin(){
        Backbone.history.stop();
        this.widget.renderEl({el:this.loginContainer}, (response) => {
            this.setState({user: response.claims.email});
        },
        (err) => {
            console.log(err);
        }
        );
    }
    logout(){
        this.widget.signOut(() => {
        this.setState({user: null});
        this.showLogin();
        });
    }
    render(){
        return(
            <div>
            {this.state.user ? (
                <div className="container">
                <div>Hello, welcome!</div>
                <button onClick={this.logout}>Logout</button>
            </div>
            ): null}
            {this.state.user ? null : (
               <div ref={(div) => {this.loginContainer = div;}}/> 
            )}
            </div>
        );
    }
}
