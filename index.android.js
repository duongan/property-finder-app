'use strict';
var React = require('react');
var ReactNative = require('react-native');
var styles = ReactNative.StyleSheet.create({
  text: {
    color : 'black',
    backgroundColor : 'white',
    fontSize : 30,
    margin : 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return React.createElement(ReactNative.text, {style : styles.text}, "Hello World!");
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinderApp', function() {return PropertyFinderApp});