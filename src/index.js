import React, {Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Link, Route} from "react-router-dom";

import ProcedurePlot, {ProcedurePlotTimeDiff,ProcedurePlotClickSelector,ProcedurePlotHoverSelector} from "./lib";
import {PlotInteractionProvider,Relay,INTERACTION_MODEL_BARE} from "react-plot-interaction-box";

// CSS
import "./index.css";

const data = {
  "HLHS STAGE I, CARDIAC": [{ id:0,
                              name:"HLHS STAGE I, CARDIAC",
                              start:800, end:850}],
  "CHEST CLOSURE, CARDIAC OFF UNIT": [{ id:1,
                                        name:"CHEST CLOSURE, CARDIAC OFF UNIT",
                                        start:5100, end:5200}],
  "GASTROSTOMY, LAPAROSCOPIC, GENSURG": [{id:2,
                                          name:"GASTROSTOMY, LAPAROSCOPIC, GENSURG",
                                          start:9000, end:9020}],
  "VESICOSTOMY CREATION/CLOSURE, GU": [{id:3,
                                        name:"VESICOSTOMY CREATION/CLOSURE, GU",
                                        start:10300, end:10400}],
  "BIDIRECTIONAL GLEN SHUNT, CARDIAC": [{ id:4,
                                          name:"BIDIRECTIONAL GLEN SHUNT, CARDIAC",
                                          start:16000, end:16400}],
  "all": [{ id:0,
            name:"HLHS STAGE I, CARDIAC",
            start:800, end:850},
          { id:1,
            name:"CHEST CLOSURE, CARDIAC OFF UNIT",
            start:5100, end:5200},
          { id:2,
            name:"GASTROSTOMY, LAPAROSCOPIC, GENSURG",
            start:9000, end:9020},
          { id:3,
            name:"VESICOSTOMY CREATION/CLOSURE, GU",
            start:10300, end:10400},
          { id:4,
            name:"BIDIRECTIONAL GLEN SHUNT, CARDIAC",
            start:16000, end:16400},
          ],
}

class ProcedurePlotBundle extends Component {
  constructor(props){
    super(props);
    this.state={width: 800,
                height: 400,
                minX: 0,
                maxX: 20000,
                data_: "HLHS STAGE I, CARDIAC",
                selection: 1,
    };
  }
  
  render() {
    let {width,height,minX,maxX,data_,selection} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            width
            <input  type="range" min={400} max={800} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={100} max={400} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
          <div>
            minX
            <input  type="range" min={0} max={maxX} value={minX}
                    onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}
                    />
            {minX}
          </div>
          <div>
            maxX
            <input  type="range" min={minX} max={20000} value={maxX}
                    onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}
                    />
            {maxX}
          </div>
          <div>
            data
            <select value={data_}
                    onChange={(ev)=>this.setState({data_:ev.target.value})}>
              <option value="HLHS STAGE I, CARDIAC">HLHS STAGE I, CARDIAC</option>
              <option value="CHEST CLOSURE, CARDIAC OFF UNIT">CHEST CLOSURE, CARDIAC OFF UNIT</option>
              <option value="GASTROSTOMY, LAPAROSCOPIC, GENSURG">GASTROSTOMY, LAPAROSCOPIC, GENSURG</option>
              <option value="VESICOSTOMY CREATION/CLOSURE, GU">VESICOSTOMY CREATION/CLOSURE, GU</option>
              <option value="BIDIRECTIONAL GLEN SHUNT, CARDIAC">BIDIRECTIONAL GLEN SHUNT, CARDIAC</option>
              <option value="all">all</option>
            </select>
            <pre>
              {JSON.stringify(data[data_])}
            </pre>
          </div>
          <div>
            selection
            <select value={selection}
                    onChange={(ev)=>this.setState({selection: Number.parseInt(ev.target.value)})}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <ProcedurePlot  data={data[data_]}
                          selection={selection}
                          width={width}
                          height={height}
                          minX={minX}
                          maxX={maxX}
                          />
        </fieldset>
      </>
    );
  }
}

class ProcedurePlotTimeDiffBundle extends Component {
  constructor(props){
    super(props);
    this.state={width: 800,
                height: 400,
                minX: 0,
                maxX: 20000,
                selection: -1,
                hoveringPosition:{domX:0,domY:0},
    };
  }
  
  render() {
    let {width,height,minX,maxX,selection,hoveringPosition} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            data: {"[{id,start,end,name}]"}
          </div>
          <div>
            width
            <input  type="range" min={400} max={800} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={100} max={400} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
          <div>
            minX
            <input  type="range" min={0} max={maxX} value={minX}
                    onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}
                    />
            {minX}
          </div>
          <div>
            maxX
            <input  type="range" min={minX} max={20000} value={maxX}
                    onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}
                    />
            {maxX}
          </div>
          <div>
            hoveringPosition
            .domX
            <input  type="range" min={0} max={width} value={hoveringPosition.domX}
                    onChange={(ev)=>this.setState({hoveringPosition:{...hoveringPosition,domX:Number.parseInt(ev.target.value)}})}
                    />
            .domY
            <input  type="range" min={0} max={height} value={hoveringPosition.domY}
                    onChange={(ev)=>this.setState({hoveringPosition:{...hoveringPosition,domY:Number.parseInt(ev.target.value)}})}
                    />
            {JSON.stringify(hoveringPosition,null,' ')}
          </div>
          <div>
            selection
            <select value={selection}
                    onChange={(ev)=>this.setState({selection: Number.parseInt(ev.target.value)})}>
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={-1}>null</option>
            </select>
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <ProcedurePlotTimeDiff  width={width}
                                  height={height}
                                  minX={minX}
                                  maxX={maxX}
                                  data={data["all"]}
                                  selection={ selection===-1? null : selection }
                                  hoveringPosition={hoveringPosition}
                                  />
        </fieldset>
      </>
    );
  }
}

class ProcedurePlotHoverSelectorBundle extends Component {
  constructor(props){
    super(props);
    this.state = {minX: 0,
                  maxX: 20000,
                  width: 800,
                  hoveringPosition:{domX:0, domY:0},
                  selection: null
    };
  }
  
  render() {
    let {minX,maxX,width,hoveringPosition,selection} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            data: {"[{id,start,end,name}]"}
          </div>
          <div>
            width
            <input  type="range" min={400} max={800} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            minX
            <input  type="range" min={0} max={maxX} value={minX}
                    onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}
                    />
            {minX}
          </div>
          <div>
            maxX
            <input  type="range" min={minX} max={20000} value={maxX}
                    onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}
                    />
            {maxX}
          </div>
          <div>
            hoveringPosition
            .domX
            <input  type="range" min={0} max={width} value={hoveringPosition.domX}
                    onChange={(ev)=>this.setState({hoveringPosition:{...hoveringPosition,domX:Number.parseInt(ev.target.value)}})}
                    />
            {JSON.stringify(hoveringPosition,null,' ')}
          </div>
          <div>
            selectHandler: 
            function(selectionID)
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          This component does not display anything itself.
          <ProcedurePlotTimeDiff  width={width}
                                  height={20}
                                  minX={minX}
                                  maxX={maxX}
                                  data={data["all"]}
                                  selection={ selection===-1? null : selection }
                                  hoveringPosition={hoveringPosition}
                                  />
          <ProcedurePlot  data={data["all"]}
                          selection={selection}
                          width={width}
                          height={200}
                          minX={minX}
                          maxX={maxX}
                          />
          <ProcedurePlotHoverSelector data={data["all"]}
                                      minX={minX}
                                      maxX={maxX}
                                      width={width}
                                      hoveringPosition={hoveringPosition}
                                      selectHandler={(selection)=>this.setState({selection})}
                                      />
        </fieldset>
        <fieldset>
          <legend>Callback</legend>
          selectHandler args, the id of the selected procedure: {selection}
        </fieldset>
      </>
    );
  }
}

class ProcedurePlotClickSelectorBundle extends Component {
  constructor(props){
    super(props);
    this.state = {minX: 0,
                  maxX: 20000,
                  width: 800,
                  height: 200,
                  clickPosition_:{domX:0, domY:10},
                  clickPosition:null,
                  selection: null
    };
  }
  
  render() {
    let {minX,maxX,width,height,clickPosition,clickPosition_,selection} = this.state;
    return (
      <>
        <fieldset>
          <legend>Props</legend>
          <div>
            data: {"[{id,start,end,name}]"}
          </div>
          <div>
            width
            <input  type="range" min={400} max={800} value={width}
                    onChange={(ev)=>this.setState({width:Number.parseInt(ev.target.value)})}
                    />
            {width}
          </div>
          <div>
            height
            <input  type="range" min={200} max={400} value={height}
                    onChange={(ev)=>this.setState({height:Number.parseInt(ev.target.value)})}
                    />
            {height}
          </div>
          <div>
            minX
            <input  type="range" min={0} max={maxX} value={minX}
                    onChange={(ev)=>this.setState({minX:Number.parseInt(ev.target.value)})}
                    />
            {minX}
          </div>
          <div>
            maxX
            <input  type="range" min={minX} max={20000} value={maxX}
                    onChange={(ev)=>this.setState({maxX:Number.parseInt(ev.target.value)})}
                    />
            {maxX}
          </div>
          <div>
            clickPosition
            .domX
            <input  type="range" min={0} max={width} value={clickPosition_.domX}
                    onChange={(ev)=>this.setState({clickPosition_:{...clickPosition_,domX:Number.parseInt(ev.target.value)}})}
                    />
            .domY
            <input  type="range" min={0} max={height} value={clickPosition_.domY}
                    onChange={(ev)=>this.setState({clickPosition_:{...clickPosition_,domY:Number.parseInt(ev.target.value)}})}
                    />
            <button onClick={(ev)=>this.setState({clickPosition:{...clickPosition_}})}>Trigger Click</button>
            {JSON.stringify(clickPosition_,null,' ')}
          </div>
          <div>
            selectHandler: 
            function(selectionID)
          </div>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          This component does not display anything itself.
          <div style={{position:"relative",width:width,height:height}}>
            <div style={{position:"absolute"}}>
              <ProcedurePlot  data={data["all"]}
                              selection={selection}
                              width={width}
                              height={height}
                              minX={minX}
                              maxX={maxX}
                              />
            </div>
            <div style={{position:"absolute"}}>
              <div style={{ position:"relative",left:clickPosition_.domX,top:clickPosition_.domY,
                            width:2,height:2,
                            backgroundColor:"red"}}>
              </div>
            </div>
          </div>
          <ProcedurePlotClickSelector data={data["all"]}
                                      minX={minX}
                                      maxX={maxX}
                                      width={width}
                                      height={height}
                                      clickPosition={clickPosition}
                                      selectHandler={(selection)=>this.setState({selection})}
                                      selection={selection}
                                      />
        </fieldset>
        <fieldset>
          <legend>Callback</legend>
          selectHandler args, the id of the selected procedure: {selection}
        </fieldset>
      </>
    );
  }
}

class ProcedurePlotFullDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {hoverSelection:null,
                  clickSelection:null,
                  hoveringPosition:null
                  };
  }
  
  render() {
    let width = 800;
    let height = 400;
    let data_ = data["all"];
    let minX = 0;
    let maxX = 20000;
    let {hoverSelection,clickSelection,hoveringPosition} = this.state;
    let selection = clickSelection || hoverSelection;
    return (
      <>
        <fieldset>
          <legend>Demo</legend>
        </fieldset>
        <fieldset>
          <legend>Result</legend>
          <div style={{position:"relative",width:width,height:height}}>
            <div style={{position:"absolute",width:width,height:height}}>
              <ProcedurePlot data={data_}
                             selection={selection}
                             minX={minX}
                             maxX={maxX}
                             width={width}
                             height={height}
                             />
            </div>
            <div style={{position:"absolute",width:width,height:height}}>
              <ProcedurePlotTimeDiff  width={width}
                                      height={height}
                                      minX={minX}
                                      maxX={maxX}
                                      data={data_}
                                      selection={selection}
                                      hoveringPosition={hoveringPosition}
                                      />
            </div>
            <div style={{position:"absolute",width:width,height:height}}>
              <PlotInteractionProvider  width={width}
                                        height={height}
                                        transitionGraph={INTERACTION_MODEL_BARE}
                                        render={(positions)=>
                <>
                  <Relay  data={positions}
                          updateHandler={(positions)=>this.setState({hoveringPosition:positions.hoveringPosition})}
                          />
                  <ProcedurePlotHoverSelector data={data_}
                                              minX={minX}
                                              maxX={maxX}
                                              width={width}
                                              hoveringPosition={positions.hoveringPosition}
                                              selectHandler={(hoverSelection)=>this.setState({hoverSelection})}
                                              />
                  <ProcedurePlotClickSelector data={data_}
                                              minX={minX}
                                              maxX={maxX}
                                              width={width}
                                              height={height}
                                              clickPosition={positions.clickPosition}
                                              selectHandler={(clickSelection)=>this.setState({clickSelection})}
                                              selection={selection}
                                              />
                </>
                                        }/>
            </div>
          </div>
        </fieldset>
      </>
    );
  }
}

class App extends Component{
  render(){
    return (
      <Router>
        <nav className="app">
          <Link to="/ProcedurePlot">ProcedurePlot</Link>
          <Link to="/ProcedurePlotTimeDiff">ProcedurePlotTimeDiff</Link>
          <Link to="/ProcedurePlotHoverSelector">ProcedurePlotHoverSelector</Link>
          <Link to="/ProcedurePlotClickSelector">ProcedurePlotClickSelector</Link>
          <Link to="/ProcedurePlotFullDemo">ProcedurePlotFullDemo</Link>
        </nav>
        <Route path="/ProcedurePlot" exact component={ProcedurePlotBundle}/>
        <Route path="/ProcedurePlotTimeDiff" exact component={ProcedurePlotTimeDiffBundle}/>
        <Route path="/ProcedurePlotHoverSelector" exact component={ProcedurePlotHoverSelectorBundle}/>
        <Route path="/ProcedurePlotClickSelector" exact component={ProcedurePlotClickSelectorBundle}/>
        <Route path="/ProcedurePlotFullDemo" exact component={ProcedurePlotFullDemo}/>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
