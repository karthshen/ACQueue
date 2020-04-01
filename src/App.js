import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/navbar'
import Counters from "./components/counters";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete} />
                </main>
            </React.Fragment>
        );
    }

    state = {
        counters: [
            { id: 1, value: 4, fontSize: 15 },
            { id: 2, value: 5, fontSize: 15 },
            { id: 3, value: 6, fontSize: 15 },
            { id: 4, value: 0, fontSize: 15 }
        ]
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({ counters: counters });

        console.log(counterId, " deleted");
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters: counters });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        counters[counters.indexOf(counter)].value++;
        this.setState({ counters: counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        counters[counters.indexOf(counter)].value--;
        this.setState(counters);
    };
}

export default App;
