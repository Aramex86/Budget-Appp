import {
  PlusOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Col, Row, Spin, Tooltip } from "antd";
import { Colors } from "../../../helpers/enums/colors";
import { Box, Button } from "../..";
import { PartyIcon, MedicineIcon, antIcon } from "../../Icons";
import { UserCategories, UserPayments } from "../../../models/userModel";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { SetIconByCategory } from "../../SetIconByCategory/setIconsByCategory";
import { stringToNumber } from "../../../helpers/stringToNumber";

interface ICategories {
  categories: UserCategories[];
  isFetching: boolean;
  payments: UserPayments[];
}

export function Categories({ categories, isFetching, payments }: ICategories) {
  const [showIncome, setShowIncomee] = useState<boolean>(false);

  const handleIncome = () => {
    setShowIncomee(true);
  };

  const handleEspence = () => {
    setShowIncomee(false);
  };

  const income = payments
    ?.filter((item: UserPayments) => {
      const amount = stringToNumber(item.amount);
      return item.category === "Income" && amount;
    })
    .reduce((a: number, c: UserPayments) => {
      return a + Number(c.amount.slice(1));
    }, 0);

  return (
    <Box
      background={Colors.White}
      padding="35px 25px"
      display="flex"
      flexDirection="column"
      borderRadius="20px"
      boxShadow="#8080806e 0px 1px 6px 1px"
    >
      <Box display="flex" gap={10}>
        <Box
          fontWeight={700}
          fontSize={18}
          display="flex"
          justifyContent="space-between"
        >
          Categories by
        </Box>
        <Box display="flex" gap={5}>
          <Button
            backgroundColor={Colors.CoralPink}
            color={Colors.White}
            border="none"
            borderRadius={5}
            onClick={handleEspence}
          >
            Expense
          </Button>
          <Button
            backgroundColor={Colors.VistaBlue}
            color={Colors.White}
            border="none"
            borderRadius={5}
            onClick={handleIncome}
          >
            Income
          </Button>
        </Box>
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
            {showIncome ? (
              <Row wrap={true} gutter={[20, 20]} justify="space-between">
                {categories
                  ?.slice(0, 1)
                  .map(({ currency }: UserCategories, i) => (
                    <Col flex="auto" key={i}>
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
                        <Box>
                          <SetIconByCategory
                            category="Income"
                            text
                            switchBackground={false}
                          />
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          flexDirection="column"
                          alignItems="center"
                        >
                          <Box>Total Icome</Box>
                          <Box>
                            {income} {currency}
                          </Box>
                        </Box>
                      </Box>
                    </Col>
                  ))}
              </Row>
            ) : (
              <Row wrap={true} gutter={[20, 20]} justify="space-between">
                {categories?.map(
                  ({ amount = "0", category, currency }: UserCategories) => (
                    <Col xxl={10} xl={10} key={category} flex="auto">
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
                        <Box>
                          <SetIconByCategory
                            category={category}
                            text
                            switchBackground={false}
                          />
                        </Box>
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
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
