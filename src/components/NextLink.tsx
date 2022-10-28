import { chakra } from "@chakra-ui/system";
import LibNextLink from "next/link";
import type { ComponentProps } from "react";

export const NextLinkUnstyled = ({
  href,
  ...props
}: ComponentProps<typeof LibNextLink>) => {
  if (typeof href === "object" || !isUrlRelative(href)) {
    return <LibNextLink href={href} {...props} />;
  }

  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href} {...props} />;
};

const isUrlRelative = (url: string) => {
  const parsedUrl = new URL(url, DUMMY_RELATIVE_ORIGIN);

  return parsedUrl.origin === DUMMY_RELATIVE_ORIGIN;
};

const DUMMY_RELATIVE_ORIGIN = "http://__relative";

export const NextLink = chakra(NextLinkUnstyled);
