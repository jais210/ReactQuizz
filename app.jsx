// class Todo extends React.Component {
//    constructor(props) {
//       super(props);

//       this.state = {
//          text: "",
//          todolist: props.list
//       };
//    }
//    onSubmit(e) {
//       e.preventDefault();
//       console.log("onSubmit");
//       var item = {
//          text: this.state.text,
//          checked: false
//       };
//       this.setState({
//          text: "",
//          todolist: this.state.todolist.concat([item])
//       });
//    }
//    onChange(e) {
//       console.log("onChange", e.target.value);
//       this.setState({
//          text: e.target.value,
//          todolist: this.state.todolist
//       });
//    }
//    render() {
//       const todoList = this.state.todolist.map((item, index) => {
//          return <li key={index}> {item.text} </li>;
//       });
//       return (
//          <div>
//             <form onSubmit={e => this.onSubmit(e)}>
//                <input
//                   value={this.state.text}
//                   type="text"
//                   onChange={e => this.onChange(e)}
//                />
//                <button type="submit"> add item</button>
//             </form>
//             <ol>{todoList}</ol>
//          </div>
//       );
//    }
// }

// const items = [
//    { text: "Aprender React", checked: false },
//    { text: "Aprender JSX", checked: true },
//    { text: "Aprender States", checked: false }
// ];

// ReactDOM.render(<Todo list={items} />, document.getElementById("container"));

const tab = [
    {
        pregunta: 'Who was the pinter of heavy forms?',
        respuestas: ['Botero', 'Velásquez', 'Picaso'],
        respuestaCorrecta: 'Botero'
    },
    {
        pregunta: 'Who is the writer of Rayuela?',
        respuestas: ['Cortázar', 'Vargas', 'Bolaños'],
        respuestaCorrecta: 'Cortázar'
    },
    {
        pregunta: 'What is the real name of Quino?',
        respuestas: ['Joaquín', 'Geremías', 'Salvador'],
        respuestaCorrecta: 'Lavado'
    },

    {
        pregunta: 'What is the real name of Quino?',
        respuestas: ['Joaquín Lavado', 'Geremías Gamboa', 'Roberto Bolaños'],
        respuestaCorrecta: 'Joaquín Lavado'
    }
]

class Model {
    constructor() {
        this.preguntas = preguntas;
        this.marcar = true;
        this.contar = 0,
            this.respuestas = [],
            this.correctas = 0,
            this.completo = false,
            this.comparar = false
    }


}

const App = ({ model }) => {

    let opciones = (opciones) => {
        return Object.keys(opciones).map((key, index) => {
            let value = opciones[key];
            return (<div className={model.respuestas[model.contar] == value ? 'col-md-4 seleccionado' : 'col-md-4'}>
                <button className='btn' key={index} onClick={(e) => model.guardarRespuesta(value)}><span className='letra'>{key}</span>{value}</button>
            </div>);
        })
    }
    let crearPreguntas = () => {
        return (
            <div>
                <h1 className="text-center"> {model.preguntas[model.contar].pregunta} </h1>
                <div className="opciones row">
                    {opciones(model.preguntas[model.contar].opciones)}
                </div>
            </div>
        );
    }
    let listarRespuestas = () => {
        return (
            <div id='respuestas'>
                <h1 className="text-center">
                    {!model.comparar && 'Here are you answers:'}
                    {model.comparar && model.correctas === 0 && 'Ooops, ' + model.correctas + ' out of ' + model.preguntas.length + ' correct!'}
                    {model.comparar && model.correctas === model.preguntas.length && 'Wow, ' + model.correctas + ' out of ' + model.preguntas.length + ' correct!'}
                    {model.comparar && model.correctas < model.preguntas.length && model.correctas != 0 && model.correctas + ' out of ' + model.preguntas.length + ' correct!'}
                </h1>
                {model.respuestas.map((a, i) => {
                    if (a == model.preguntas[i].respuesta && model.comparar) {
                        return <p className="text-success">{i + 1}. {model.preguntas[i].pregunta}<strong>{a}</strong></p>
                    } else if (model.comparar) {
                        return <p className="text-danger">{i + 1}. {model.preguntas[i].pregunta}<strong><strike>{a}</strike> {model.preguntas[i].respuesta}</strong></p>
                    } else {
                        return <p>{i + 1}. {model.preguntas[i].pregunta}<strong>{a}</strong></p>;
                    }
                })
                }
                <div className='text-center'>
                    {model.comparar && <button className='btn-lg btn-dark' onClick={() => model.reiniciar()}>Start Again</button>}
                    {!model.comparar && <button className='btn-lg btn-dark' onClick={() => model.compararRespuestas()}>Submit</button>}
                </div>

            </div>
        );

    }

    return (
        <div className="container">
            <header className="text-center">
                {!model.completo && <img src={model.preguntas[model.contar].imagen} />}
                {model.completo && <img src="assets/img/truck.svg" />}
            </header>
            <div className="content">
                {!model.comparar &&
                    <div id="progreso">
                        <div className="progress-label">
                            {model.respuestas.length} of {model.preguntas.length} answered
            </div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuemax="100" style={{ width: model.respuestas.length * 20 + '%', height: '5px' }}>
                            </div>
                        </div>
                    </div>
                }
                <div id="prueba">
                    {!model.completo && crearPreguntas()}
                    {model.completo && listarRespuestas()}
                </div>
                <RedesSociales />
            </div>
            {!model.comparar && model.respuestas.length != 0 &&
                <div id="flechas" className="text-center">
                    <button id="anterior" className={model.respuestas.length >= model.contar && model.marcar && model.contar ? 'btn' : "btn disabled"} onClick={() => model.anterior()}>
                        <img className="img-responsive" src="assets/img/navigation-left-arrow.svg" alt="" />
                    </button>
                    <button id="siguiente" className={model.respuestas.length > model.contar & model.marcar ? 'btn' : "btn disabled"} onClick={() => model.siguiente()}>
                        <img className="img-responsive" src="assets/img/navigation-right-arrow.svg" alt="" />
                    </button>
                </div>
            }
        </div>);
}


let model = new Model(preguntas);
let render = () => {
    ReactDOM.render(
        <App model={model} />,
        document.getElementById('container')
    );
};

model.subscribe(render);
render();

class Model {

    constructor() {
        this.todos = [];
        this.inputValue = null;
        this.render = undefined;
    }

    subscribe(render) {
        this.render = render;
    }
    inform() {
        console.log(this.todos.map(e => e.text));
        this.render();
    }
    addTodo(text) {
        this.todos.push({
            id: Utils.uuid(),
            text: text,
            completed: false
        });
        this.inform();
    }
    updateTodo(index, todo) {
        this.todos[index] = todo;
        this.inform();
    }
    removeTodo(todo) {
        this.todos = this.todos.filter(item => item !== todo);
        this.inform();
    }
}

const App = ({ title, model }) => {
    const items = model.todos.map((todo, index) => {
        return (
            <li key={todo.id}>
                <input
                    type="text"
                    value={todo.text}
                    onChange={e =>
                        model.updateTodo(index, {
                            id: todo.id,
                            text: e.target.value,
                            completed: todo.completed
                        })}
                />
                <button onClick={() => model.removeTodo(todo)}> delete item</button>
            </li>
        );
    });
    return (
        <div>
            <h1> {title} </h1>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    model.addTodo(model.inputValue);
                }}
            >
                <input onChange={e => (model.inputValue = e.target.value)} />
                <button type="submit">Add Item</button>
            </form>
            <ol> {items} </ol>
        </div>
    );
};

let model = new Model();
let counter = 1;
let render = () => {
    console.log('render times: ', counter++);
    ReactDOM.render(
        <App title="TodoApp" model={model} />,
        document.getElementById('container')
    );
};

model.subscribe(render);
render(); 