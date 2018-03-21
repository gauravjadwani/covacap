
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
import ConfigureStore from './../store/configureStore';
import {database} from '../firebase';
import {connect} from 'react-redux';
import {LOAD_FIREBASE_DATA} from './../actions';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const products = [];

function addProducts(quantity) {
  const startId = products.length;
  for (let i = 0; i < quantity; i++) {
    const id = startId + i;
    if (i < 3) {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i,
        expand: [ {
          fieldA: 'test1',
          fieldB: (i + 1) * 99,
          fieldC: (i + 1) * Math.random() * 100,
          fieldD: '123eedd' + i
        }, {
          fieldA: 'test2',
          fieldB: i * 99,
          fieldC: i * Math.random() * 100,
          fieldD: '123eedd' + i
        } ]
      });
    } else {
      products.push({
        id: id,
        name: 'Item name ' + id,
        price: 2100 + i
      });
    }
  }
}
addProducts(5);

class BSTable extends React.Component {
  render() {
    if (this.props.data) {
      return (
        <BootstrapTable data={ this.props.data }>
          <TableHeaderColumn dataField='fieldA' isKey={ true }>Field A</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldB'>Field B</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldC'>Field C</TableHeaderColumn>
          <TableHeaderColumn dataField='fieldD'>Field D</TableHeaderColumn>
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
    if (row.id < 3)
    return true;
    else return false;
  }

  expandComponent(row) {
    console.log('row.expand',row.expand);
    return (
      <BSTable data={ row.expand } />
    );
  }

  render() {
    console.log('products',products);
      console.log('dataList',this.props.dataList);
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
      // expandBy: 'column'  // Currently, available value is row and column, default is row
    };
    return (
      <BootstrapTable data={ this.props.dataList }
        options={ options }
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }
        search>
        <TableHeaderColumn dataField='Book@Reoffer' isKey={ true }>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Book_Size' expandable={ false }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='CONTROL' expandable={ false }>Product Price</TableHeaderColumn>
        <TableHeaderColumn dataField='Current_Cut_Off'>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Name' expandable={ false }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='No_Of_Orders' expandable={ false }>Product Price</TableHeaderColumn>
        <TableHeaderColumn dataField='ORDCOLUMN' >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='PKEY' expandable={ false }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='Price_Guidance' expandable={ false }>Product Price</TableHeaderColumn>
        <TableHeaderColumn dataField='Remarks' >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Save' expandable={ false }>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='Size(MM)' expandable={ false }>Product Price</TableHeaderColumn>
        <TableHeaderColumn dataField='Status' >Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='Tenor' expandable={ false }>Product Name</TableHeaderColumn>
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
