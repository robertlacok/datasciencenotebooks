import { Fragment, ReactNode } from "react";
import { P } from "../components/prose";

interface OpenSourceNotebooksContentProps {
  notebookCards: ReactNode;
}

export function OpenSourceNotebooksContent({
  notebookCards,
}: OpenSourceNotebooksContentProps) {
  return (
    <Fragment>
      <P>
        The notebook ecosystem has a variety of tools with both proprietary and
        open-source licenses. It’s incredible to see how much of the notebook
        space is open-source. Jupyter in particular can be credited for
        notebooks as we know them today.
      </P>
      <P>Below is a list of open source notebook tools.</P>
      {notebookCards}
    </Fragment>
  );
}

OpenSourceNotebooksContent.meta = {
  title: "Open-source notebooks",
  description:
    "A list of open-source data science notebooks. Jupyter is the most popular open-source notebook.",
  lastModifiedAt: "2022-10-26T04:14:23.998Z",
};
