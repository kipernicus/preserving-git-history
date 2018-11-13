## KualiDays 2018

### Preserving Git History

This is a sample application for demonstrating techniques for preserving history in git.


### Getting Started

Clone this repository using the following command:

`git clone https://github.com/kipernicus/preserving-git-history.git`


### Basics

#### View the history of commits:

`git log`

#### See a line by line overview of commits for a file:

`git blame <filename>

#### View a specific commit:

`git show <commit-hash>`

#### Commit changes:

`git commit`


### Changing History

#### Edit the last commit message:

`git commit --amend`

#### Edit a previous commit message (Dangerous!):

`git rebase -i <commit-hash>`
`git commit --amend`
`git rebase --continue`

#### Remove commit(s) (Dangerous!):

`git reset <commit-hash>` (Keep changes)
`git reset --hard <commit-hash>` (Discard changes)


### Moving Files and Preserving History

#### See history of a renamed/moved file:

`git log --follow <filename>`

#### Move a file and preserve history*:
`git mv <old> <new>`

#### Preserve history of a file that has already been moved not (not using `git mv`)*:

`git add <new>`
`git rm <old>`

\* When moving and changing a file, history may still be lost if changes exceed a certain threshold.  It is better to move+commit and change+commit.

#### Move a file or files to a new repository

Instead of copy/pasting fork the repository to retain history.

#### Move a file or files to an existing repository

Not simple, but possible.  See http://gbayer.com/development/moving-files-from-one-git-repository-to-another-preserving-history/
