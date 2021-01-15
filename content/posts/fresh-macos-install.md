---
title: "Fresh macOS install: From 0% to 100% ready for development in just a glance"
thumbnail: "https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3302&q=80"
date: 2021-01-15T23:49:08+07:00
draft: false
tags:
- terminal
- shell
- dotfiles
- software
- macos
categories:
- notes
keywords:
- setup
- brew
- terminal
- shell
- dotfiles
- software
- macos
- zsh
- tmux
- alacritty
description: "Many people afraid of reinstalling their computer, or change their computer, because there are just too many things, software installed. But not me, instead, I enjoy it."
---

Many people afraid of reinstalling their computer, or change their computer, because there are just too many things, software installed. But not me, instead, I enjoy it.

## How can I enjoy reinstalling my computer over and over?

Reinstall computer is not as hard as it seems, regardless of how many software that you have.

There are a few things that you need to follow to make these progress easier:

- Sync everything that you can sync to the cloud
- Be neat and clean, on your computer. Make sure you always put your files and folders in the place that its belongs to.
- Be neat and clean
- Be neat and clean (important things have to be repeated 3 times)

## Everything Backed Up, now what?

Just to mention, i know that macos can be reinstall without losing any data. But you know what, i love the feeling of a fresh install, like, a brand new computer. So yeah, why not delete everything?

There are many way to [reinstall macos](https://support.apple.com/en-us/HT204904), but i prefer [using a bootable installer](https://support.apple.com/en-us/HT201372) (usb).

If you want a fresh install, like me, you will need to erase the disk in the install progress.

## Have a fresh macOS, what to do?

The first thing that i want to do, is to **turn off SIP** (System Integrity Protection (rootless) mode). It is a security feature that prevent changing root-level files even with the root password. Yeah, sounds awesome right? But, i'm a developer, no one tell me what to do :smirk:

You may want to disable `Secure Boot` and `Gatekeeper` too. And like `SIP`, they are optional.

### Homebrew

Don't tell me that you don't know this name? The most famous package manager for macOS. Homebrew is the most important piece.

To install homebrew, you gotta have "Command Line Tools (CLT) for Xcode" first:

```sh
xcode-select --install
```

Then install homebrew with:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

We are going to use `Homebrew bundle`, which let us install pretty much everything else, with just a `Brewfile` and a single command.

And yes you're right, I do have my own `Brewfile` and you can use it. Check it out [here](https://github.com/huynhducduy/dotfiles/blob/master/Brewfile)
But before, you may want to **login to "App Store"** first, because with brew, you can even install app from App Store without manually click by yourself.

Now download my `Brewfile` and let the party (the installation) begin:

```sh
curl https://raw.githubusercontent.com/huynhducduy/dotfiles/master/Brewfile -s -o Brewfile
brew bundle install
```

To be continue...
