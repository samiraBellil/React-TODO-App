import React, { Component } from "react";
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      complete: false
    };
  }
  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  addItem = () => {
    // const arr = this.state.items;
    // arr.push({
    //   term: this.state.term,
    //   complete: false
    // })

    this.setState({
      items: [...this.state.items, {term: this.state.term, complete: false}],
      term: ""
    })
  }



  onclick_complete = (el) => {
    const x = this.state.items.map(elm => el.term === elm.term ?
      {
        ...elm,
        complete: !elm.complete
      }: elm) 
      this.setState({ items: x })
  }

  onclick_delete = (todo) => {
    this.setState({ items: this.state.items.filter(el => el !== todo) })
  }


  render() {
    return (
      <div className="App">
        <div className="bleu_top">
          <h1>To-Do App !</h1>
          <h5>Add New To-Do</h5>
          <input className="Part-text" type="text" placeholder="Enter new task" value={this.state.term} onChange={this.onChange} />
          <div className="add-button">
            <button className="add-btn" onClick={this.addItem} >Add</button>
          </div>
        </div>
        <h2 className="title">Let's get some work done !</h2>
        <hr />

        <section>
          {this.state.items.map((el, i) =>
            <div key={i} className="to_do">
              <button className="button-complete" onClick={() => this.onclick_complete(el)}>{el.complete ? 'Undo' : 'Complete'}</button>
              <button className="button-delete" onClick={() => this.onclick_delete(el)}>Delete</button>
              <h1 className={el.complete === true ? "onclick_done" : ""}>{el.term}</h1>
            </div>)}

        </section>

      </div>

    );
  }
}

export default App;
