import { Fragment, ReactNode } from "react";
import { H2, P, A, SkipButton } from "../components/prose";

interface JupyterSchedulingContentProps {
  notebookCards: ReactNode;
}

export function JupyterSchedulingContent({
  notebookCards,
}: JupyterSchedulingContentProps) {
  return (
    <Fragment>
      <P>
        Scheduling Jupyter notebooks means running them automatically at
        specified times. This allows you or your team to rely on the results of
        a notebook without having to manually run it. For example, you could
        keep a dataset up to date by periodically pulling from a data source. Or
        you could run a notebook that generates a report and send it to your
        team over email or Slack.
      </P>
      <P>
        Jupyter has no mechanism for scheduling notebooks. You can use
        additional tooling to do this for you, or you could use a
        Jupyter-compatible tool that has scheduling built-in.
      </P>
      <P as="div">
        <SkipButton />
      </P>

      <H2>Scheduling Jupyter notebooks locally</H2>
      <P>
        To schedule a Jupyter notebook, you’ll need to write a script that runs
        on the schedule you want. This is usually done using cron to schedule,
        and something like <A href={links.nbconvert}>nbconvert</A> or{" "}
        <A href={links.papermill}>papermill</A> to execute the notebook.
      </P>
      <P>
        For example, <A href={links.scheduleNotebookTutorial}>this blog post</A>{" "}
        shows how to use papermill and cron to schedule running a notebook.
      </P>
      <P>
        The risk with this is that the computer needs to always be running. If
        you run this script on your local computer, for example, every time you
        turn the computer off or log out the schedule will stop running. You’ll
        need to run this script in the cloud to get it running reliably.
      </P>

      <H2 id="tool-section">
        Use a Jupyter-compatible notebook with scheduling built-in
      </H2>
      <P>
        It’s much easier, and much more reliable, to use a tool with scheduling
        built-in. These tools let you write Jupyter notebooks like you’re
        familiar with, and have an easy-to-use UI for creating schedules to run
        notebooks on. Most of them also notify you if something goes wrong.
      </P>
      <P>
        Below are some notebook tools that are Jupyter-compatible and have first
        class support for scheduling.
      </P>
      {notebookCards}
    </Fragment>
  );
}

const links = {
  scheduleNotebookTutorial:
    "https://filipstollar.medium.com/how-to-schedule-a-jupyter-notebook-to-run-every-day-week-or-month-ae3f992f3afc",
  nbconvert: "https://nbconvert.readthedocs.io/en/latest/",
  papermill: "https://papermill.readthedocs.io/en/latest/",
};

JupyterSchedulingContent.meta = {
  title: "Scheduling Jupyter notebooks",
  description:
    "Jupyter has no mechanism for scheduling notebooks. You can use additional tooling to do this for you, or you could use a Jupyter-compatible tool that has scheduling built-in.",
  lastModifiedAt: "2022-10-26T02:49:03.343Z",
};
