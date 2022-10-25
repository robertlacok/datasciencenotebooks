import { Fragment, ReactNode } from "react";
import { H2, Li, P, ProseImage, Ul, A, SkipButton } from "../components/prose";
import notebookDiff from "./notebook-diff.png";

interface JupyterVersionControlProps {
  notebookCards: ReactNode;
}

export function JupyterVersionControlContent({
  notebookCards,
}: JupyterVersionControlProps) {
  return (
    <Fragment>
      <P>
        When you’re writing a Jupyter notebook, it’s useful to track changes.
        This means that you can go back to a previous version of the notebook,
        or compare different versions. Just like any document, it means that you
        can make changes without worrying about losing your previous work.
      </P>
      <P>
        Using Git works to version control Jupyter notebooks, but there are more
        ergonomic options when using other Jupyter-compatible tools.
      </P>
      <P as="div">
        <SkipButton />
      </P>

      <H2>Using Git to version control Jupyter notebooks</H2>
      <P>
        Jupyter notebooks are just files, so the default option is to version
        control with Git. This works especially well for production systems or
        libraries where there is already code being tracked with Git. It fits
        right in with your existing workflow.
      </P>
      <P>
        However, this comes with several drawbacks. Git is a tool made for
        software engineers working primarily in text files. It’s not designed
        for the specific needs of data scientists or the specific needs of
        Jupyter notebooks.
      </P>
      <Ul>
        <Li>
          You have to remember to make commits, otherwise, your changes won’t be
          tracked. When you’re working in a notebook, you’re often making small
          changes and running code. You might not want to commit every time you
          run a cell.
        </Li>
        <Li>
          You have to remember to sync with a remote repository, otherwise, your
          changes won’t be backed up or you will conflict with other people’s
          changes.
        </Li>
        <Li>By default, diffs come up as ugly JSON, which is hard to read.</Li>
        <Li>
          Resolving conflicts is almost impossible without specialized tooling.
        </Li>
      </Ul>
      <ProseImage
        src={notebookDiff}
        alt="A diff of a Jupyter notebook"
        caption="This is the reality of comparing notebooks in Git without help from more software."
      />
      <P>
        Extra tooling will make your life easier if you want to go down this
        route. For example,{" "}
        <A href={links.nbdev}>
          nbdev has impressive capabilities for resolving conflicts
        </A>{" "}
        and <A href={links.jupyterlabGit}>JupyterLab has a Git extension</A>.
      </P>

      <H2 id="tool-section">
        Use a Jupyter-compatible notebook with version control built-in
      </H2>
      <P>
        If you don’t need the software engineering discipline that Git offers,
        there are other options. There are fully managed notebook tools that
        just have version control built in. You make a change to the notebook,
        and it’s automatically saved. You can go back to previous versions, and
        you can see a diff of the changes.
      </P>
      <P>
        This is a great option for data scientists who want to focus on the data
        science, not the software engineering.
      </P>
      <P>
        The best tools are the ones that offer realtime collaboration as well as
        versioning. This way, you never have to worry about conflicting with
        other people or writing over each other’s work.
      </P>
      <P>
        Below are some notebook tools that are Jupyter-compatible, have version
        control, and have realtime collaboration.
      </P>
      {notebookCards}
    </Fragment>
  );
}

const links = {
  nbdev: "https://www.fast.ai/posts/2022-08-25-jupyter-git.html",
  jupyterlabGit: "https://github.com/jupyterlab/jupyterlab-git",
};

JupyterVersionControlContent.meta = {
  title: "Version control in Jupyter notebooks",
  description:
    "Using Git works to version control Jupyter notebooks, but there are more ergonomic options when using other Jupyter-compatible tools.",
};
