import { Fragment, ReactNode } from "react";
import { P, A } from "../components/prose";

interface JupyterOnlineContentProps {
  notebookCards: ReactNode;
}

export function JupyterOnlineContent({
  notebookCards,
}: JupyterOnlineContentProps) {
  return (
    <Fragment>
      <P>
        Jupyter notebooks are useful for sharing insights about data. If the
        notebook is just on your own device, how are you supposed to share it?
        Sending an ipynb file to someone else is not a great experience.
        Ideally, you could send a link, and the recipient doesn’t have to worry
        about installing Jupyter or Python environments or anything like that.
      </P>
      <P>
        A difficult way to do this is to run a “Jupyter server” and expose it to
        the internet. It’s a lot of effort, but valid in some situations.{" "}
        <A href={links.jupyterServer}>
          Jupyter has docs on how to do just this
        </A>
        .
      </P>
      <P>
        Managed, or hosted, notebooks are a much more reliable way to do this.
        Managed notebooks handle running Jupyter for you, and let you share
        notebooks with just a link. Setting them up takes minutes instead of
        hours.
      </P>
      <P>Below is a list of fully managed Jupyter-compatible notebook tools.</P>
      {notebookCards}
    </Fragment>
  );
}

const links = {
  jupyterServer:
    "https://filipstollar.medium.com/how-to-schedule-a-jupyter-notebook-to-run-every-day-week-or-month-ae3f992f3afc",
};

JupyterOnlineContent.meta = {
  title: "Running Jupyter notebooks online",
  description:
    "Running Jupyter notebooks online lets you share them easily. There are several services that offer this.",
  lastModifiedAt: "2022-10-26T03:12:56.482Z",
};
