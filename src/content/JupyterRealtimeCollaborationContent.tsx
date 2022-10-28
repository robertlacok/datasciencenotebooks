import { Fragment, ReactNode } from "react";
import { H2, P, Ol, Li, SkipButton, Code, A } from "../components/prose";
import { routes } from "../routes";

interface JupyterRealtimeCollaborationContentProps {
  notebookCards: ReactNode;
}

export function JupyterRealtimeCollaborationContent({
  notebookCards,
}: JupyterRealtimeCollaborationContentProps) {
  return (
    <Fragment>
      <P>
        Exploratory programming in data notebooks is inherently collaborative.
        At the very least, you want to be able to share your findings with
        others. But its better if two or more people can jump in the same
        notebook and make changes together. Kind of like Google Docs or Figma,
        but in a data notebook.
      </P>
      <P>
        JupyterLab has experimental support for realtime collaboration, but it
        takes some setting up. Other notebook tools make this much easier.
      </P>
      <P as="div">
        <SkipButton />
      </P>

      <H2>Running JupyterLab’s experimental realtime collaboration</H2>
      <P>
        You need to run JupyterLab in a server environment to use realtime
        collaboration in a meaningful way (see{" "}
        <A href={routes["jupyter-notebook-online"]()}>
          Jupyter notebooks online
        </A>{" "}
        for more info). When you start JupyterLab you need to run it with the
        <Code>--collaborative</Code> flag (i.e.{" "}
        <Code>jupyter lab --collaborative</Code>).
      </P>
      <P>
        Then you can share the URL of the notebook with others. They’ll be able
        to edit and run code just like you can.{" "}
        <A href={links.jupyterLabRtc}>Read their docs for more information</A>.
      </P>
      <P>There are two pretty big drawbacks to this:</P>
      <Ol>
        <Li>
          You need to make sure the Jupyter server is running all the time.
        </Li>
        <Li>
          There is no kind of access management. It’s all or nothing. For
          example, you can’t have users with read-only access. If users can see
          the notebook, they can execute code.
        </Li>
      </Ol>

      <H2 id="tool-section">
        Use a Jupyter-compatible notebook with realtime collaboration
      </H2>
      <P>
        These problems go away if you use a tool with realtime collaboration.
        Below are some notebook tools that are Jupyter-compatible and have
        realtime collaboration.
      </P>
      {notebookCards}
    </Fragment>
  );
}

const links = {
  jupyterLabRtc: "https://jupyterlab.readthedocs.io/en/stable/user/rtc.html",
};

JupyterRealtimeCollaborationContent.meta = {
  title: "Realtime collaboration in Jupyter notebooks",
  description:
    "JupyterLab has experimental support for realtime collaboration, which requires some setup. It's easier to use a managed notebook with realtime collaboration.",
  lastModifiedAt: "2022-10-28T04:39:25.271Z",
};
