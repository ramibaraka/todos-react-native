import React, { Component } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

const Fill = () => <View style={styles.fill} />;

class OnOff extends Component {
  constructor(props) {
    super(props);
    this.toggleOn = this.toggleOn.bind(this);
    this.state = {
      on: this.props.active
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      on: nextProps.active
    });
  }

  toggleOn() {
    const { on } = this.state;
    const { onPress, active } = this.props;
    if (on == active) {
      this.setState(
        {
          on: !on
        },
        onPress(on)
      );
    }
  }

  render() {
    const { on } = this.state;
    return (
      <TouchableWithoutFeedback onPress={this.toggleOn}>
        <View style={[styles.onOff]}>{on && <Fill />}</View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  onOff: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 20,
    borderColor: "#cecece"
  },
  fill: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "black"
  }
};

export default OnOff;
