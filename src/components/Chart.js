import _ from 'lodash';
import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';

let chartList = {
  width: '200px',
  height: '100%'
};

const avg = (data) => {
  return _.round(_.sum(data) / data.length);
}

export default props => {
  return (
    <div style={chartList}>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{avg(props.data)} {props.units}</div>
    </div>
  );
};
