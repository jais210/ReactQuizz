class Todo extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         text: "",
         todolist: props.list
      };
   }
   onSubmit(e) {
      e.preventDefault();
      console.log("onSubmit");
      var item = {
         text: this.state.text,
         checked: false
      };
      this.setState({
         text: "",
         todolist: this.state.todolist.concat([item])
      });
   }
   onChange(e) {
      console.log("onChange", e.target.value);
      this.setState({
         text: e.target.value,
         todolist: this.state.todolist
      });
   }
   render() {
      const todoList = this.state.todolist.map((item, index) => {
         return <li key={index}> {item.text} </li>;
      });
      return (
         <div>
            <form onSubmit={e => this.onSubmit(e)}>
               <input
                  value={this.state.text}
                  type="text"
                  onChange={e => this.onChange(e)}
               />
               <button type="submit"> add item</button>
            </form>
            <ol>{todoList}</ol>
         </div>
      );
   }
}

const items = [
   { text: "Aprender React", checked: false },
   { text: "Aprender JSX", checked: true },
   { text: "Aprender States", checked: false }
];

ReactDOM.render(<Todo list={items} />, document.getElementById("container"));