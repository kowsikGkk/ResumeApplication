/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
	constructor(props){
		super(props);
		this.state={
			selectedTab: 'yellowTab',
			hidden: false,
		}
		this.closeTab = this.closeTab.bind(this);
	}
	closeTab (){
		this.setState(previousState => {
			return { hidden: !this.state.hidden };
		  })
		console.log('............',this.state.hidden)
	}
  render() {
    return (
		<TouchableOpacity style={styles.container} onPress={this.closeTab}>
	  	{this.state.hidden && <View style={styles.leftPan}>
		  <View>
			  </View>

		</View>}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
	marginBottom: 5,
	fontSize: 50,
  },
  leftPan: {
	height: '100%',
	width: '50%',
	backgroundColor: 'green',
	alignSelf: 'flex-start',
  },
});
