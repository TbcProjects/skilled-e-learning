import { Link as SkLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

interface BcLinkProps extends LinkProps {
  href: string;
}

const Link = ({ children, key, href, ...restProps }: BcLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <SkLink key={key} {...restProps}>
        {children}
      </SkLink>
    </NextLink>
  );
};

export default Link;
