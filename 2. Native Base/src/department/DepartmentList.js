import React, { Component } from "react";
import { StyleSheet, Alert } from "react-native";
import {
  Container,
  Footer,
  Content,
  View,
  Text,
  Button,
  Icon,
  SwipeRow,
  Fab
} from "native-base";

export default class DepartmentList extends Component {
  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Text>DepartmentList works!</Text>
        </View>
        <Footer style={styles.footer}>
          <Text note style={styles.footerText}>
            Total number of departments:
          </Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  footer: {
    backgroundColor: "#9C27B0",
    alignItems: "center"
  },
  footerText: {
    color: "white"
  }
});
