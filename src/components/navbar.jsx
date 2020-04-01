import React, { Component } from 'react';

class navbar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#"> 小鳄鱼动物森友会排队插件 {" "}
                        <span className="badge badge-pill badge-secondary">
                            当前队列：{this.props.totalCounters}</span></a>
                </nav>
            </div>
        )
    }
}

export default navbar
