import { createAppContainer, createStackNavigator } from "react-navigation";

import DepartmentList from "./src/department/DepartmentList";

const MainNavigator = createStackNavigator({
  departmentList: {
    screen: DepartmentList,
    navigationOptions: () => ({
      title: "React Native and Mobx ",
      headerTintColor: "#F4F3EE",
      headerStyle: {
        backgroundColor: "#9C27B0"
      },
      gesturesEnabled: false
    })
  }
});

const Router = createAppContainer(MainNavigator);

export default Router;
