'use strict'

const items= [{
    question: 'Who was the painter of big girls?',
    options: ['Botero', 'Velásquez', 'Picaso'],
    correctAnswer: 'Botero'
},
{
    question: 'Who wrote the best popular novel in Argentina?',
    options: ['Cortázar', 'Vargas', 'Bolaños'],
    correctAnswer: 'Cortázar'
},
{
    question: 'What is the complete name of  Quino?',
    options: ['Joaquín Lavado', 'Geremías Gamboa', 'Salvador Darío'],
    correctAnswer: 'Lavado'
},
{
    question: 'Who create a famous comic in Argentina?',
    options: ['Quino', 'Disney', 'Condorito'],
    correctAnswer: 'Quino'
    
},

];
class App extends React.Component {
    constructor(props) {
      super(props);
      this.increasePercentaje = 0;
      this.questionInit = 0;
      this.i = 0;
      this.state = {
        progress: ['0%'] ,
        number: 0,
        question: props.quiz,
        answers: []
      }
    }
    handleClick(e) {
      e.preventDefault();
      let item = {
          rpta:e.target.textContent,
          number: this.state.number,
          question : this.state.question[this.state.number].question,
          progress: this.state.progress
      };
      let progress = (this.increasePercentaje + 20) + "%";
      (this.increasePercentaje >= 100)? this.increasePercentaje = 100 : this.increasePercentaje += 20;
      this.setState({
          progress: this.state.progress.concat([progress]),
          number: this.state.number + 1,
          question: this.state.question,
          answers:this.state.answers.concat([item]),
      });
      console.log(item);
    }
    render () {
      let i = this.state.number;
     console.log( this.state.progress[i]+"-"+i)
      const divStyle = {
          width: this.state.progress[i]
        }
      if(i < this.state.question.length){
      return (
        <div className="container text-center">
          <div className="row justify-content-xl-center ">
              
          </div>
          <div className="">
          <div className="progress">
              <div className="progress-bar" role="progressbar" style={divStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="row justify-content-xl-center ">
              <div className="col-xl-12 col-sm-12">
                  <h2>{this.state.question[i].question}</h2>
              </div>
          </div>
          <div className="row justify-content-xs-center ">
              <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.question[i].options[0]}</div>
              <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.question[i].options[1]}</div>
          </div>
          <div className="row justify-content-xs-center ">
              <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.question[i].options[2]}</div>
              <div className="col-xl-5 col-sm-5" onClick={e => this.handleClick(e)}>{this.state.question[i].options[3]}</div>
          </div>
          </div>
      </div>
      );
      }else {
          console.log(this.state);
          const answers = this.state.answers.map((element, index) => {
              return ( <div key={index}><p>{index + 1}. {element.question}:</p><p className='parrafoRespuesta'><strong> {element.rpta}</strong></p></div> )
          })
          return( <div className="container text-center">
                      <div className="row justify-content-xl-center ">
                          <div className="col col-xl-12">
                     
              </div></div>
              <div className="">
              <div className="progress">
                  <div className="progress-bar" role="progressbar" style={divStyle} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div><h2>YOUR ANSWER ARE:: </h2></div>
              <div className="selecciona">{answers}</div>
              </div></div>);
      }
    }
  }
 
  ReactDOM.render(<App quiz={items} />, document.getElementById("container"));
 
  