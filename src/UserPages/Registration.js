import React, { Component } from 'react';
export default class Registarion extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            userName: ''
        };
    }

    componentDidMount() {
        localStorage.removeItem("user_id");
    }


    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/login'); // need to remove after API integration
        fetch('/api/registration', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/login');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error in Registration please try again');
            });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Registarion Page!</h1>
                <input
                    type="text"
                    name="userName"
                    placeholder="Enter username"
                    value={this.state.userName}
                    onChange={this.handleInputChange}
                    required
                />
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