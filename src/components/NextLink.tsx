import { chakra } from "@chakra-ui/system";
import LibNextLink from "next/link";
import { ComponentProps, forwardRef, Ref } from "react";

export const NextLinkUnstyled = forwardRef(function NextLinkUnstyled(
  { href, ...props }: ComponentProps<typeof LibNextLink>,
  ref: Ref<HTMLAnchorElement>
) {
  if (typeof href === "object" || isUrlRelative(href)) {
    return <LibNextLink ref={ref} href={href} {...props} />;
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      ref={ref}
      href={href}
      rel={!isUrlRelative(href) ? "noopener noreferrer" : undefined}
      {...props}
    />
  );
});

const isUrlRelative = (url: string) => {
  const parsedUrl = new URL(url, DUMMY_RELATIVE_ORIGIN);

  return parsedUrl.origin === DUMMY_RELATIVE_ORIGIN;
};

const DUMMY_RELATIVE_ORIGIN = "http://__relative";

export const NextLink = chakra(NextLinkUnstyled);
