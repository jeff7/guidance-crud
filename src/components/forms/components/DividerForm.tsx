import React from "react";
import { AbsoluteCenter, Box, Divider } from "@chakra-ui/react";
import { IDivider } from "../../../types";

export const DividerForm: React.FC<IDivider> = ({
  label,
}) => {
  return (
    <Box position="relative" padding="10">
      <Divider />
      <AbsoluteCenter bg="white" px="4">
        <strong>{label}</strong>
      </AbsoluteCenter>
    </Box>
  );
};
