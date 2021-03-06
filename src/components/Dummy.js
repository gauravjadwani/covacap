
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn,SearchField } from 'react-bootstrap-table';
// import ConfigureStore from './../store/configureStore';
// import {database} from '../firebase';
// import {connect} from 'react-redux';
// import {LOAD_FIREBASE_DATA} from './../actions';
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



class D extends React.Component {
  constructor(props) {
    super(props);
  }

  isExpandableRow(row) {
        console.log('row.expand',row.expand);
    if (row.id < 2) return true;
    else return false;
  }

  expandComponent(row) {

    return (
      <BSTable data={ row.expand } />
    );
  }

  render() {
    console.log('products',products);
    const options = {
      expandRowBgColor: 'rgb(242, 255, 163)'
    };
    return (
      <BootstrapTable data={ products }
        options={ options }
        striped
        expandableRow={ this.isExpandableRow }
        expandComponent={ this.expandComponent }

        search
         expandColumnOptions={ { expandColumnVisible: true } }>
        <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
        <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
        <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
export default D;
