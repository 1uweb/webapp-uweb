import React from 'react'
import css from '../main.sass'

export default class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }

    render() {
        return (
            <main className="error-root">
                <p>
                    {this.props.statusCode
                        ? `An error ${this.props.statusCode} occurred on server`
                        : 'An error occurred on client'}
                </p>
            </main>
        )
    }
}
