import React, { Component } from 'react';
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    componentDidMount() {
        if (JSON.parse(localStorage.getItem('user_id')) !== null) {
            this.props.history.push('/Dashboard');
        }
    }


    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }
 
        onSubmit = (event) => {
            event.preventDefault();
            localStorage.setItem('user_id' , JSON.stringify("eyJzdWIiOiJlYjhkYWYwNy0zYjk4LTRhMTEtOTYwZC00M")); // temporary purpose , just to add some token to localstorage
            fetch('/api/authenticate', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res.status === 200) {
                        localStorage.setItem('user_id' , JSON.stringify(res.token));
                        this.props.history.push('/');
                    } else {
                        const error = new Error(res.error);
                        throw error;
                    }
                })
                .catch(err => {
                    console.error(err);
                    alert('Error logging in please try again');
                });
        }
    
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Login Page!</h1>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    required
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}