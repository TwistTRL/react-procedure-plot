import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import TimeDiff from "react-timediff";
import {toDomXCoord_Linear,
        fromDomXCoord_Linear} from "plot-utils";

class ProcedurePlotTimeDiff extends PureComponent {
  render() {
    let { 
          width,
          height,
          data,
          selection, 
          hoveringPosition,
          minX,maxX,
          } = this.props;
    if (hoveringPosition===null || selection===null || data.length===0) {
      return null;
    }
    this.render_memo = this.render_memo || {};
    let memo = this.render_memo;
    if (memo.data!==data) {
      memo.data = data;
      memo.normalizedData = {};
      for (let d of data) {
        memo.normalizedData[d.id] = d;
      }
    }
    let selectedObj = memo.normalizedData[selection];
    let selectionEndDomX = selectedObj.end;
    let hoverX = fromDomXCoord_Linear(width,minX,maxX,hoveringPosition.domX);
    return (
      <div style={{width:width, height:height}}>
        <TimeDiff width={width}
                  height={20}
                  minX={minX}
                  maxX={maxX}
                  startX={selectionEndDomX}
                  endX={hoverX}
                  />
      </div>
    );
  }
}

ProcedurePlotTimeDiff.propTypes = {
  data: PropTypes.array.isRequired,
  selection: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  minX: PropTypes.number.isRequired,
  maxX: PropTypes.number.isRequired,
  hoveringPosition: PropTypes.object,
};

export default ProcedurePlotTimeDiff;
export {TimeDiff};


