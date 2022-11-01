import { Fragment, ReactNode } from "react";
import { P, A, H2, SkipButton, Strong } from "../components/prose";
import { routes } from "../routes";

interface JupyterCommentsContentProps {
  notebookCards: ReactNode;
}

export function JupyterCommentsContent({
  notebookCards,
}: JupyterCommentsContentProps) {
  return (
    <Fragment>
      <P>
        Data science is a team sport. The conversation needs to include
        different stakeholders with different views. The usual people are other
        data scientists and business stakeholders.
      </P>
      <P>
        If you’re in a Jupyter notebook, getting feedback from these people is
        possible but involves degrees of separation from the original notebook.
        It’d be much better to collaborate in the notebook itself, which you can
        do with other tools.
      </P>
      <P as="div">
        <SkipButton />
      </P>
      <H2>Getting feedback and comments in a Jupyter notebook</H2>
      <P>
        <Strong>Comments from data scientists</Strong> involve a code review
        workflow on platforms like GitHub. This is problematic for the{" "}
        <A href={routes["jupyter-version-control"]()}>
          same reasons that using Git for Jupyter notebooks is
        </A>
        . It’s a workflow designed for software engineers.
      </P>
      <P>
        <Strong>Comments from business stakeholders</Strong> involve taking
        parts of the notebook out and putting it into a convenient format, like
        screenshots in a presentation or an Excel export. This is removed from
        the notebook itself. When you make changes based on those inevitable
        comments, you’ll need to go through making sure your screenshots and
        exports are up to date.
      </P>
      <H2 id="tool-section">Using a notebook with comments built-in</H2>
      <P>
        You can avoid all of these problems by using a Jupyter-compatible
        notebook tool that lets you make comments directly inside the notebook.
        As they’re close to the code, data scientists can leave comments easily.
        As the user interface is approachable for everyone, business
        stakeholders can leave comments as well.
      </P>
      <P>
        Below is a list of Jupyter-compatible notebook tools that have
        commenting capabilities.
      </P>
      {notebookCards}
    </Fragment>
  );
}

JupyterCommentsContent.meta = {
  title: "Comments in Jupyter notebooks",
  description:
    "Data science is a team sport. Get better feedback on notebooks by using tools that have comments built in.",
  lastModifiedAt: "2022-11-01T03:35:39.863Z",
};
