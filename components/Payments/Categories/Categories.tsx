import {
  PlusOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Col, Row, Spin, Tooltip } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, Button } from "../..";
import { PartyIcon, MedicineIcon, antIcon } from "../../Icons";
import { UserCategories } from "../../../models/userModel";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

interface ICategories {
  categories: UserCategories[];
  isFetching: boolean;
}

export function Categories({ categories, isFetching }: ICategories) {
  const displayIconOnCategory = (category: string) => {
    switch (category) {
      case "Apartament":
        return (
          <HomeOutlined
            style={{ fontSize: "24px", color: `rgb(39 199 182)` }}
          />
        );
      case "Grocery":
        return (
          <ShoppingCartOutlined
            style={{ fontSize: "24px", color: "rgb(101 27 206)" }}
          />
        );
      case "Party":
        return (
          <PartyIcon style={{ fontSize: "24px", fill: "rgb(60 153 67)" }} />
        );
      case "Medicine":
        return (
          <MedicineIcon style={{ fontSize: "24px", fill: "rgb(217 51 51)" }} />
        );
    }
  };

  return (
    <Box
      background={Colors.White}
      padding="35px 25px"
      display="flex"
      flexDirection="column"
      borderRadius="20px"
      boxShadow="#8080806e 0px 1px 6px 1px"
    >
      <Box
        fontWeight={700}
        fontSize={18}
        display="flex"
        justifyContent="space-between"
      >
        Categories
      </Box>
      <Box
        marginTop={25}
        background={Colors.White}
        display="flex"
        justifyContent="space-around"
        flexWrap="wrap"
      >
        {isFetching ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Spin indicator={antIcon} />
          </Box>
        ) : (
          <>
            <Row wrap={true} gutter={[20, 20]} justify="space-between">
              {categories?.map(
                ({ amount = "0", category, currency }: UserCategories) => (
                  <Col xxl={6} xl={10} key={category} flex="auto">
                    <Box
                      padding="10px 10px"
                      background="rgb(89 221 207 / 17%)"
                      borderRadius={12}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-around"
                      fontWeight={700}
                      boxShadow="0px 2px 4px 2px #8a8a8a4f"
                      marginBottom={10}
                    >
                      <Box>{displayIconOnCategory(category)}</Box>
                      <Box
                        display="flex"
                        justifyContent="center"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Box>{category}</Box>
                        <Box>
                          {amount} {currency}
                        </Box>
                      </Box>
                    </Box>
                  </Col>
                )
              )}
            </Row>
          </>
        )}
      </Box>
    </Box>
  );
}
