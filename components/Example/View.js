import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { updateExampleData } from '../../actions/example'

class Example extends Component {
  static propTypes = {
    exampleProp: PropTypes.number.isRequired,
    updateExampleData: PropTypes.func.isRequired
  }

   _incrementData = () => {
     console.log('incrementing data')
     const newData = this.props.exampleProp + 1
     this.props.updateExampleData(newData)
  }

  render() {
    console.log(this.props.exampleProp)
    return (
      <View>
        <Text
          style={styles.textStyle}
        >
          exampleData: {this.props.exampleProp.toString()} </Text>
          <View
            style={styles.buttonContainer}
          >
            <Button
              onPress={this._incrementData}
              title="Increment Data"
              color="blue"
              style={styles.button}
            />
          </View>
      </View>
    )
  }
}

  const mapStateToProps = (state, props) => {
    const exampleProp = state.example.example.exampleData

    const newProps = {
      exampleProp: exampleProp
    }
    return newProps
  }

  const mapDispatchToProps = dispatch => {
    return {
      updateExampleData: newIncrement => {
        dispatch(updateExampleData(newIncrement))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Example)

const styles = {
  textStyle: {
    top: 80,
    left: 107
  },
  buttonContainer: {
    top: 100
  }
}
