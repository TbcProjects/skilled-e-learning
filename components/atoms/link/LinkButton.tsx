import NextLink from "next/link";
import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface LinkButtonProps extends ButtonProps {
  href: string;
  label: string;
}

const LinkButton = ({
  variant,
  label,
  href,
  ...restProps
}: LinkButtonProps) => {
  return (
    <NextLink href={href} passHref>
      <Button as="a" variant={variant} {...restProps}>
        <Text>{label}</Text>
      </Button>
    </NextLink>
  );
};

export default LinkButton;
