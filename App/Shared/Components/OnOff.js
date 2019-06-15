import React, { Component } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

const Fill = () => <View style={styles.fill} />;

class OnOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: this.props.active
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      on: nextProps.active
    });
  }

  toggleOn = () => {
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
  };

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
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginRight: 20,
    borderColor: "#cecece"
  },
  fill: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "black"
  }
};

export default OnOff;
