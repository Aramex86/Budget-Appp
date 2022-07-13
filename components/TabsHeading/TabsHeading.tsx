import { Colors } from "../../helpers/enums/colors";
import { Box } from "../Box/Box";

interface TabsHeading {
  text: string;
  color?: string;
  subText?: string;
}

export function TabsHeading({ text, color, subText }: TabsHeading) {
  return (
    <Box>
      <Box
        paddingTop={10}
        paddingLeft={25}
        fontWeight={600}
        fontSize="18px"
        color={color ? color : Colors.AmethystSmoke}
      >
        {text}
        {subText && (
          <Box color={Colors.AmethystSmoke} fontSize="13px">
            {subText}
          </Box>
        )}
      </Box>
    </Box>
  );
}
