import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { notification } from "antd";
import { NotificationPlacement } from "antd/lib/notification";
export const openNotificationSucess = (
  placement: NotificationPlacement,
  desc: string
) => {
  notification.success({
    message: `Resposta Correcta`,
    description: desc,
    placement,
  });
};
export const openNotificationFail = (
  placement: NotificationPlacement,
  desc: string
) => {
  notification.error({
    message: `Resposta Errada`,
    description: desc,
    placement,
  });
};
export const openNotificationInfo = (
  placement: NotificationPlacement,
  desc: string
) => {
  notification.info({
    message: `Atenção!`,
    description: desc,
    placement,
  });
};

import React from "react";

// import { Container } from './styles';

const Notification: React.FC = () => {
  return <div />;
};

export default Notification;
