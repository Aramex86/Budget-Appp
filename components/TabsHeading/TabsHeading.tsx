import Box from "../Box/Box";
import { Colors } from "../../helpers/enums/colors";

interface TabsHeading {
  text: string;
}

export function TabsHeading({ text }: TabsHeading) {
  return (
    <Box>
      <Box
        paddingTop={10}
        paddingLeft={25}
        fontWeight={600}
        fontSize="18px"
        color={Colors.AmethystSmoke}
      >
        {text}
      </Box>
    </Box>
  );
}
