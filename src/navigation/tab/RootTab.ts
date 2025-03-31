import Chart from "@/screens/App/ChartScreen";
import More from "@/screens/App/MoreScreen";
import Order from "@/screens/App/OrderScreen";
import OverView from "@/screens/App/OverviewScreen";
import ProdCommand from "@/screens/App/ProdCommandScreen";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

interface ScreensType {
  name: RootTabParamEnum;
  component: React.ComponentType<any>;
  options: Partial<BottomTabNavigationOptions>;
}

export enum RootTabParamEnum {
  Overview = "Tổng quan",
  Order = "Đơn hàng",
  Chart = "Sơ đồ gantt",
  ProdCommand = "Lệnh SX",
  More = "Xem thêm",
}

export type RootTabParamList = {
  [RootTabParamEnum.Overview]: undefined;
  [RootTabParamEnum.Order]: undefined;
  [RootTabParamEnum.Chart]: undefined;
  [RootTabParamEnum.ProdCommand]: undefined;
  [RootTabParamEnum.More]: undefined;
};
export const screens: ScreensType[] = [
  {
    name: RootTabParamEnum.Overview,
    component: OverView,
    options: {
      tabBarLabel: RootTabParamEnum.Overview,
    },
  },
  {
    name: RootTabParamEnum.Order,
    component: Order,
    options: {},
  },
  {
    name: RootTabParamEnum.Chart,
    component: Chart,
    options: {},
  },
  {
    name: RootTabParamEnum.ProdCommand,
    component: ProdCommand,
    options: {},
  },
  {
    name: RootTabParamEnum.More,
    component: More,
    options: {},
  },
];
