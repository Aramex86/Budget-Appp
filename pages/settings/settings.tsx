import Head from "next/head";
import { useEffect } from "react";
import {
  AntTabs,
  Box,
  ChangePassword,
  CradOptions,
  EditProfile,
  NotificationSettings,
} from "../../components";

import { StyledTabPane } from "../../components/AntTabs/AntTabs.style";

import { Colors } from "../../helpers/enums/colors";
import { useGetUser } from "../../hooks";
import { IUser } from "../../models/userModel";

export default function settings() {
  const {
    status,
    data = [],
    error,
    isFetching,
    refetch,
  } = useGetUser({ enabled: true });

  const [user] = data as IUser[];
  const { cards } = user || {};

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Box position="relative">
        <AntTabs padding="0 30px" marginTop={10}>
          <StyledTabPane tab="Edit Profile" key="1">
            <EditProfile />
          </StyledTabPane>
          <StyledTabPane tab="Change Password" key="2">
            <ChangePassword />
          </StyledTabPane>
          <StyledTabPane tab="Card Options" key="3">
            <CradOptions cards={cards} />
          </StyledTabPane>
          <StyledTabPane tab="Notification Settings" key="4">
            <NotificationSettings />
          </StyledTabPane>
        </AntTabs>
        <Box
          position="absolute"
          width="39%"
          height="2px"
          top="43px"
          left="50%"
          background={Colors.VistaBlue}
          transform={`translate(-50%,-50%)`}
        />
      </Box>
    </>
  );
}
