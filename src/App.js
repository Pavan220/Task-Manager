import React from "react";
import Task from "./task";
import "./taskManager.css";
class App extends React.Component {
  state = {
    data: {
      Greetings: "WELCOME",
    },
    title: "",
    note: "",
    key: ["A0"],
    j: ["B0"],
  };

  onXClick = (del) => {
    const tempdata = { ...this.state.data };
    delete tempdata[`${del}`];
    this.setState({ data: { ...tempdata } });
  };
  onsubmit = () => {
    let temp = {};
    let i = this.state.key.length;
    temp[this.state.title] = this.state.note;
    this.setState((prev) => ({
      data: { ...prev.data, ...temp },
      key: [...prev.key, `A${i}`],
      j: [...prev.j, `B${i}`],
      title: "",
      note: "",
    }));
  };
  onTitleChng = (event) => {
    this.setState({ title: event.target.value });
  };
  onNoteChng = (event) => {
    this.setState({ note: event.target.value });
  };
  formSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="parentContainer">
        <div className="dataAdder">
          <header>Add Task</header>
          <form onSubmit={this.formSubmit} className="dataEntry">
            <label>Title</label>
            <input
              className="Title"
              value={this.state.title}
              onChange={this.onTitleChng}
              type="text"
            />
            <label>Note</label>
            <textarea
              className="Notes"
              onChange={this.onNoteChng}
              value={this.state.note}
            ></textarea>
            <input
              className="savebtn"
              onClick={this.onsubmit}
              type="button"
              value="save"
            />
          </form>
        </div>
        <div>
          <header>Task Manager</header>
          <div className="MainContainer">
            {this.state.key.length === this.state.j.length
              ? Object.keys(this.state.data).map((key) => {
                  return (
                    <Task
                      key={
                        this.state.key[
                          Object.keys(this.state.data).indexOf(key)
                        ]
                      }
                      title={key}
                      note={this.state.data[key]}
                    >
                      <button
                        className="delete"
                        key={
                          this.state.j[
                            Object.keys(this.state.data).indexOf(key)
                          ]
                        }
                        onClick={() => this.onXClick(key)}
                      >
                        ×
                      </button>
                    </Task>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
