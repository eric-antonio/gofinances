import React from "react";
import { TextInputProps } from "react-native";
import { Container } from "./stylex";

type Props = TextInputProps;

export function Input({ ...rest }: Props) {
  return <Container {...rest} />;
}
