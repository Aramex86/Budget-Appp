import Head from "next/head";
import Box from "../../components/Box/Box";
import Button from "../../components/Buttons/Button";
import { Colors } from "../../helpers/enums/colors";
import { connectToDatabase } from "../../lib/mongoDb";
import Image from "next/image";
import { Avatar } from "../../components/Avatar/Avatar";
import { UploadOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import Link from "next/link";

export default function UserProfile({ movies }: any) {
  console.log(movies);
  return (
    <>
      <Head>
        <title>User Profile</title>
      </Head>

      <Box position="relative" height="100vh">
        <Box
          position="absolute"
          background={`rgb(151 151 179 / 58%)`}
          height="50%"
          width="100%"
        />
        <Box
          backgroundImage={`url(/images/background.jpg)`}
          backgroundSize="cover"
          margin="auto"
          height="50%"
        >
          <Box
            paddingLeft={15}
            paddingTop={5}
            color={Colors.White}
            fontSize={16}
            fontWeight={700}
            position="relative"
            zIndex={1}
          >
            User Profile
          </Box>
          <Box marginTop={140} paddingLeft={15}>
            <Box
              color={Colors.White}
              fontSize={26}
              fontWeight={600}
              position="relative"
              zIndex={1}
            >
              Hello Jhon Doe
            </Box>
            <Box color={Colors.White} position="relative" zIndex={1}>
              This is your profile page were you can manage your data.
            </Box>
          </Box>
        </Box>
        <Box padding="0 20px" position="absolute" top={292} width="100%">
          <Box display="flex" justifyContent="space-between">
            <Box width="68%">
              <Box
                background={Colors.White}
                padding="20px 25px"
                borderRadius="5px  5px 0 0"
                display="flex"
                justifyContent="space-between"
              >
                <Box fontSize={16} fontWeight={600} color={Colors.Black}>
                  My Account
                </Box>
                <Box>
                  {/* <Link href="/settings/settings" passHref={true}> */}
                  <Button
                    borderRadius={5}
                    backgroundColor={Colors.VistaBlue}
                    color={Colors.White}
                    border={`1px solid ${Colors.VistaBlue}`}
                    fontWeight={600}
                  >
                    Settings
                  </Button>
                  {/* </Link> */}
                </Box>
              </Box>
              <Box
                background={Colors.GhostWhite}
                padding="20px 25px"
                borderRadius="0 0 5px 5px"
              >
                <Box marginBottom={40} color={Colors.SilverSand}>
                  User Information
                </Box>
                <Box padding="15px 45px">
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    marginBottom={30}
                  >
                    <Box width="45%">
                      <Box
                        fontWeight={600}
                        marginBottom={3}
                        color={Colors.AmethystSmoke}
                      >
                        First Name
                      </Box>
                      <Box
                        background={Colors.White}
                        border={`1px solid rgb(190 190 208 / 25%)`}
                        padding="5px 10px"
                        borderRadius="5px"
                        color={Colors.SilverSand}
                        boxShadow={`1px 1px 5px rgb(190 190 208) `}
                      >
                        Jhon
                      </Box>
                    </Box>
                    <Box width="45%">
                      <Box
                        fontWeight={600}
                        marginBottom={3}
                        color={Colors.AmethystSmoke}
                      >
                        Last Name
                      </Box>
                      <Box
                        background={Colors.White}
                        border={`1px solid rgb(190 190 208 / 25%)`}
                        padding="5px 10px"
                        borderRadius="5px"
                        color={Colors.SilverSand}
                        boxShadow={`1px 1px 5px rgb(190 190 208) `}
                      >
                        Doe
                      </Box>
                    </Box>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box width="45%">
                      <Box
                        fontWeight={600}
                        marginBottom={3}
                        color={Colors.AmethystSmoke}
                      >
                        Email
                      </Box>
                      <Box
                        background={Colors.White}
                        border={`1px solid rgb(190 190 208 / 25%)`}
                        padding="5px 10px"
                        borderRadius="5px"
                        color={Colors.SilverSand}
                        boxShadow={`1px 1px 5px rgb(190 190 208) `}
                      >
                        JhonDoe@gmail.com
                      </Box>
                    </Box>
                    <Box width="45%">
                      <Box
                        fontWeight={600}
                        marginBottom={3}
                        color={Colors.AmethystSmoke}
                      >
                        Phone
                      </Box>
                      <Box
                        background={Colors.White}
                        border={`1px solid rgb(190 190 208 / 25%)`}
                        padding="5px 10px"
                        borderRadius="5px"
                        color={Colors.SilverSand}
                        boxShadow={`1px 1px 5px rgb(190 190 208) `}
                      >
                        (304) 33-2867-499
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              background={Colors.White}
              width="30%"
              position="relative"
              borderRadius="5px  5px 5px 5px"
            >
              <Avatar
                position="absolute"
                top={-50}
                left="50%"
                transform={`translate(-50%,-10%)`}
                width="150px"
                height="150px"
                borderRadius="100px"
                src={
                  <Image
                    src="/images/testPic.jpg"
                    width={200}
                    height={200}
                    alt="testPic"
                  />
                }
              />
              <Box marginTop={100} padding="0 5px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  padding="0 25px"
                >
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box fontWeight={700} color={Colors.AmethystSmoke}>
                      Cards
                    </Box>
                    <Box fontWeight={600} color={Colors.SilverSand}>
                      4
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box fontWeight={700} color={Colors.AmethystSmoke}>
                      {" "}
                      Total balance
                    </Box>
                    <Box fontWeight={600} color={Colors.SilverSand}>
                      7,920.00 USD
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Box fontWeight={700} color={Colors.AmethystSmoke}>
                      Pay systems
                    </Box>
                    <Box fontWeight={600} color={Colors.SilverSand}>
                      <Box>Visa</Box>
                      <Box>Mastercard</Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                padding="50px 25px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box marginBottom={20}>
                  <Upload>
                    <Button
                      icon={<UploadOutlined />}
                      color={Colors.White}
                      backgroundColor={Colors.VistaBlue}
                      border={`1px solid ${Colors.VistaBlue}`}
                    >
                      {" "}
                      Change Avatar
                    </Button>
                  </Upload>
                </Box>
                <Box>
                  <Upload>
                    <Button
                      icon={<UploadOutlined />}
                      color={Colors.White}
                      backgroundColor={Colors.VistaBlue}
                      border={`1px solid ${Colors.VistaBlue}`}
                    >
                      Change Background
                    </Button>
                  </Upload>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(10)
    .toArray();
  return {
    props: {
      movies: JSON.parse(JSON.stringify(movies)),
    },
  };
}
