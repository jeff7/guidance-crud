import { Box, Heading, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { IInputView } from "../../types";

export const InputView: React.FC<IInputView> = ({ placeholder, value, textarea = false }) => {
  return (
    <Box flex={1} flexDirection={"row"}>
      <Heading as="h6" mb={"8px"} size="xs">
        {placeholder}:
      </Heading>
      {textarea ? (
        <Textarea
          mb="3"
          variant="filled"
          isReadOnly
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <Input
          mb="3"
          isReadOnly
          variant="filled"
          placeholder={placeholder}
          value={value}
        />
      )}
    </Box>
  );
};
