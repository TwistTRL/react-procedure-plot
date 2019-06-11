# react-procedures-plot

## Components
There are 4 components inside this packages and they are designed to work together. Typically, `ProcedurePlotHoverSelector` and `ProcedurePlotClickSelector` would also require `PlotInteractionProvider` from `react-plot-interaction-box` to function properly.
```
import ProcedurePlot from "react-procedure-plot";
export {ProcedurePlotTimeDiff, ProcedurePlotHoverSelector, ProcedurePlotClickSelector};
```

# Demo

# Examples
```
<ProcedurePlot data={data}
               selection={selection}
               minX={minX}
               maxX={maxX}
               width={width}
               height={height}
               />
```

```
<ProcedurePlotTimeDiff  width={width}
                        height={height}
                        minX={minX}
                        maxX={maxX}
                        data={data}
                        selection={selection}
                        hoveringPosition={hoveringPosition}
                        />
```

```
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
```
