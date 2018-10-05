import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const MuseumPicker = (props) => {
	console.log(props)
  return (
    <div className="row">
      <div className="ui menu">
        <div className="active item" onClick={e => props.filterMuseum(false)}>All Museums</div>
        <div className="item" onClick={e => props.filterMuseum(2) }>National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);

// export default MuseumPicker;