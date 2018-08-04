import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import LineView from '../elements/LineView';
import InventoryTitle from './InventoryTitle';
import InventoryDesc from './InventoryDesc';
import InventoryList from './InventoryList';
import InventoryFooter from './InventoryFooter';
import { Color } from './../../css';

class Inventory extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <LineView />
        <InventoryTitle navigate={this.props.navigate}/>
        <View style={styles.wrapper}>
          <InventoryDesc />
          <InventoryList />
        </View>
        <InventoryFooter />
        <LineView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
    justifyContent: 'space-between',
  },
  wrapper: {
    flexDirection: 'row',
    flex: 10,
    margin: 20,
  }
});

export default connect(null, {})(Inventory);
