import React, { Component } from "react";
import logo from "./logo.svg";
//import "./App.css";
import NavBar from './components/navbar'
import Counters from "./components/counters";

class App extends Component {

    constructor(props) {
        super(props);
        this.updateFromServer = this.updateFromServer.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <NavBar totalCounters={this.state.counters.length} />
                <main className="App">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        onAdding={this.handleAddition}
                        onClear={this.handleClear}
                        update={this.updateFromServer} />
                </main>
            </React.Fragment>
        );
    }

    state = {
        counters: [
            // { id: 1, value: 0, fontSize: 15 },
            // { id: 2, value: 0, fontSize: 15 },
            // { id: 3, value: 0, fontSize: 15 },
            // { id: 4, value: 0, fontSize: 15 },
            // { id: 5, value: 0, fontSize: 15 }
        ]
    };

    componentDidMount() {
        this.updateFromServer();
    }

    updateFromServer() {
        return fetch('https://acqbackend.herokuapp.com/getUserList')
            .then((response) => response.json())
            .then((json) => {
                var arr = [];

                for (var obj in json) {
                    arr.push(obj);
                }
                this.setState({ counters: json });
            })
            .catch((error) => {
                console.error(error);
            });
    }

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

    handleAddition = (inputText) => {
        if (inputText.length == 0 || this.state.counters.filter(c => c.value === inputText).length >= 1)
            return;
        let nextValue;
        if (this.state.counters.length > 0) {
            nextValue = this.state.counters[this.state.counters.length - 1].id + 1;
        } else {
            nextValue = 0;
        }
        console.log("New ID value: ", nextValue);
        console.log("InputText: ", inputText);
        this.setState({ counters: this.state.counters.concat({ id: nextValue, value: inputText, fontSize: 15 }) });
    }

    handleClear = () => {
        this.setState({ counters: [] });
    }
}

export default App;
