# git-self-update - Get the latest version of yor code

## Command line use

Reset current codebase to origin/master

```
$ git-self-update
```

Or either a tag name (v1.2.1) or a remote branch name (origin/master), but could also be a commit hash or anything else Git recognizes as a revision

```
$ git-self-update <target>
```

## Use as script

```
{
  "scripts":{
    "update": "git-self-update"
  }
}
```

## Installation

```
$ npm install git-self-update

```