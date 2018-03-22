
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import ConfigureStore from './../store/configureStore';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class BSTable extends React.Component {
  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
  // fieldValue is column value
  // row is whole row object
  // rowIdx is index of row
  // colIdx is index of column
  return colIdx === 0 ? 'h' : '';
}
  render() {
    if (this.props.data) {
      console.log('child',this.props.data);
      return (
        <BootstrapTable data={ this.props.data}>
        <TableHeaderColumn dataField='id' isKey columnClassName={ this.columnClassNameFormat }  hidden={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Book@Reoffer'>Book@Reoffer</TableHeaderColumn>
        <TableHeaderColumn dataField='Book_Size' >Book_Size</TableHeaderColumn>
        <TableHeaderColumn dataField='CONTROL' >'CONTROL'</TableHeaderColumn>
        <TableHeaderColumn dataField='Current_Cut_Off'>Current_Cut_Off</TableHeaderColumn>
        <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='No_Of_Orders' >No_Of_Orders</TableHeaderColumn>
        <TableHeaderColumn dataField='ORDCOLUMN' >ORDCOLUMN</TableHeaderColumn>
        <TableHeaderColumn dataField='PKEY' >PKEY</TableHeaderColumn>
        <TableHeaderColumn dataField='Price_Guidance' >Price_Guidance</TableHeaderColumn>
        <TableHeaderColumn dataField='Remarks' >Remarks</TableHeaderColumn>
        <TableHeaderColumn dataField='Save' >Save</TableHeaderColumn>
        <TableHeaderColumn dataField='Size(MM)' >Size(MM)</TableHeaderColumn>
        <TableHeaderColumn dataField='Status' >Status</TableHeaderColumn>
        <TableHeaderColumn dataField='Tenor' >Tenor</TableHeaderColumn>
        </BootstrapTable>);
    } else {
      return (<p>?</p>);
    }
  }
}


class ExpandRow extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.props.LOAD_FIREBASE_DATA();
  }
  componentWillReceiveProps=(props)=>{
    console.log('props',props)
  }
  isExpandableRow(row) {
    console.log('row.expand',row.expand);
    if (row.expand)
      return true;
    else
      return false;
  }

  expandComponent(row) {

    return (
      <BSTable data={ row.expand } />
    );
  }
  columnClassNameFormat(fieldValue, row, rowIdx, colIdx) {
  // fieldValue is column value
  // row is whole row object
  // rowIdx is index of row
  // colIdx is index of column
  return colIdx === 0 ? 'h' : '';
}

  render() {
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
      // expandBy: 'column'  // Currently, available value is row and column, default is row
    };
    console.log('expa',this.expandComponent);
    return (
      <BootstrapTable data={ this.props.dataList }
        options={ options }
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        search
        className="tablee">
        <TableHeaderColumn dataField='id' isKey  columnClassName={ this.columnClassNameFormat } className="h" hidden={true}>ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Book@Reoffer'>Book@Reoffer</TableHeaderColumn>
        <TableHeaderColumn dataField='Book_Size' >Book_Size</TableHeaderColumn>
        <TableHeaderColumn dataField='CONTROL' >'CONTROL'</TableHeaderColumn>
        <TableHeaderColumn dataField='Current_Cut_Off'>Current_Cut_Off</TableHeaderColumn>
        <TableHeaderColumn dataField='Name'>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='No_Of_Orders' >No_Of_Orders</TableHeaderColumn>
        <TableHeaderColumn dataField='ORDCOLUMN' >ORDCOLUMN</TableHeaderColumn>
        <TableHeaderColumn dataField='PKEY' >PKEY</TableHeaderColumn>
        <TableHeaderColumn dataField='Price_Guidance' >Price_Guidance</TableHeaderColumn>
        <TableHeaderColumn dataField='Remarks' >Remarks</TableHeaderColumn>
        <TableHeaderColumn dataField='Save' >Save</TableHeaderColumn>
        <TableHeaderColumn dataField='Size(MM)' >Size(MM)</TableHeaderColumn>
        <TableHeaderColumn dataField='Status' >Status</TableHeaderColumn>
        <TableHeaderColumn dataField='Tenor' >Tenor</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
// export default ExpandRow;
const mapStateToProps = ({main}) => {
  const {dataList} = main;
  return {dataList}
}
export default connect(mapStateToProps, {LOAD_FIREBASE_DATA})(ExpandRow);
