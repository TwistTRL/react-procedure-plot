import { Component } from "react";
import PropTypes from "prop-types";
import {bisect_left} from "bisect";
import {fromDomXCoord_Linear} from "plot-utils";
import ProcedureObject from "./ProcedureObject";

class ProcedurePlotHoverSelector extends Component {
  render() {
    return null;
  }

  shouldComponentUpdate(nextProps,nextState){
    if (nextProps.hoveringPosition===this.props.hoveringPosition) {
      return false;
    }
    return true;
  }

  componentDidMount(){
    this.select();
  }
  
  componentDidUpdate(){
    this.select();
  }
  
  select() {
    let { data,
          minX,maxX,width,
          hoveringPosition,
          selectHandler} = this.props;
    if (hoveringPosition===undefined) {
      return;
    }
    if (hoveringPosition===null) {
      selectHandler(null);
      return;
    }
    this.select_memo = this.select_memo || {};
    let memo = this.select_memo;
    // Column index data and fill bitmaps etc.
    if (memo.data !== data ) {
      memo.data = data;
      let procedureObjectCollection = data.map( obj=>new ProcedureObject(obj))
      memo.filteredProcedureObjects = procedureObjectCollection.filter( obj=>obj.getType()===0);
      memo.ends = memo.filteredProcedureObjects.map(({end})=>end)
                                    .sort();
    }
    if (memo.filteredProcedureObjects.length===0) {
      return;
    }
    // Filter
    let hoverX = fromDomXCoord_Linear(width,minX,maxX,hoveringPosition.domX);
    let index = Math.max(0,bisect_left(memo.ends,hoverX));
    let selection = memo.filteredProcedureObjects[index].id;
    selectHandler(selection);
  }
}

ProcedurePlotHoverSelector.propTypes = {
  data: PropTypes.array.isRequired,
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  hoveringPosition: PropTypes.object,
  selectHandler: PropTypes.func.isRequired,
};

export default ProcedurePlotHoverSelector;
