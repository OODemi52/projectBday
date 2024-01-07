# Welcome To Project Bday!!!

## Introduction

If you are reading this, that means you have a interest in web development, and want to get a project under your belt, well you just so happened to stumble on just the right repo! In this repository, we will start what will hopefully be a project that will give you a holistic view of web development. And I don't me the standard experience of learning about just the backend and just the backend, but rather the whole shabang. I'm taking Git, Testing, DevOps, and Web Architecture. We'll learn not just how to program for the web, but how the web works on a fundamental level. If all goes well, we will even cover more advanced topics.

It would be fair to mention that there are courses that can be found that cover the topics I mentioned above, but the greatest advantage this this project offers is ✨collaboration✨. Collaboration is one of the most important aspects of software development. No matter where you find yourself, collaboration is likely to be a major part of it. Whether you work in person, remote, or even if you start your own start-up, working with others, and often other developers, is an essential skill to learn.

This project will grow along with those that are engaged in it, and hopefully it will flourish like a beautiful flower or something poetic like that, anyway lets get into things!

This README will be updated along with the project.

Before we get into the nitty gritty, we will be using Git to collaborate on this project. We will also be using the command line (an important tool for developers to know!) as well. Git is what is known as a verison control software. It allows us to keep track of files and changes made to them, as well and collaborate on files in many ways we will cover over the course of this project. The following commands can be used to "clone" or copy the repo to your local machine (the first command) and then navigate into the repo (the second command):

```sh
git clone https://github.com/OODemi52/projectBday
cd projectBday
```

Below this will be more guidance about the things that we will do in this project, and honestly I am not 100% sure on the organinzaiton of everthing and things might move around, but what we have here should be enough to get us started. So go ahead, clone the repositiory and take a look around!
---

## Git and Github
Here we will cover common Git commands for interacting with local (on your machine) and remote (not on your machine) repositories. We have already covered above how to fork/clone a repository above.

- Pull: When some commits and "pushes" their code to the remote repository on Github, we then need to "pull" the changes down to our local repository so that the work we do is in sync, so to say, with the current state of the remote repo. We use the following command:

```sh
git pull
```
- Branching: Git allows us to make use of a structure reffered to as branching, in which we can have multiple versions of our repository to work on. These branches can be configured with special configurations and permissions. Branches can also be "merged" together to bring various changes, features, etc. There are many ways to set up branches for productivity and proper "Git hygiene". To create a new branch, we use the command:

```sh
git branch <branch_name>
```
Then we push the newly created branch to the remote repo:
```sh
git push origin <branch_name>
```

- Checkout: We use the "checkout" command to switch to a different branch in our repo:
```sh
git checkout <branch_name>
```
After checking out to a different branch, it is important to check what branch we are in before making commit to avoid commiting in th wrong branch.
The following shows all the branches in your repo
```sh
git branch
```
And the following returns the branch you are CURRENTLY in:
```sh
git branch --show-current
```




---

In my opinion, there are 2 very important, and often overlooked, facets of teaching people about software development - Vocabulary and Context.

## Glossary

The first one, which will be cover in this section, is vocabulary. Learning of the lingo of software development is important for two reason:
- It enables you to interact and understand with other software developers and their work.
- It primes you to think deeper about how systems and technologies that you may or may not be familiar with work.

A strong vocabulary may seem trivial, but is important  to understanding and communicating the important ideas of software development accuratly, effectively, and in a clear and concise manner. It also looks good in a job interview if it sounds like you know what you are talking about.

This repo will maintain a glossary of terms that are important to web development, and will grow and change along with the project.

- [Git] - an open-source version control software that allows developers to keep track of changes and collaborate easily with one another.
- VCS - Version Control System.
- Clone - a Git command; refers to copying the files from an existing repository onto your own local machine so that you can work on said files.

---
## History
The second facet of development that is crucial to have knowledge of is the history of web development and of the various tools and techologies we have at our disposal. This might a contriversial opinion, but I personally believe that for certain topics and concepts, knowing how things were done before can greatly improve understanding of why and how things work the way the do at the current moment (for the more experienced among you, React was what really brought me to this realization. I picked up React after the popularization of functional components and lets just say there was a lot of confusion for a while).

A great example of this is something we've been talking about a lot in this README - Git! Or to be more specific, Version Control Systems, or VCS's, like Git since Git was not the first of its kind. Before VCS was popularised, developers likely had to manually manage versions of their software. This could mean making copies and send them to each other by email, making hundreds of folders that get jumbled up, etc. There was no one standardised way of keeping track of things, and the ways that exsited, quite frankly, sucked. Its like exporting a Word file into a pdf and you keep making errors, and end up with file names like "Final_Paper.pdf", "Final_Paper_Real.pdf", "Final_Paper_Really_For_Real_This_Time.pdf", etc. While you can still use Git without knowing this, it can help you at the very least understand why its necessary. When we start to cover more advanced concepts, and even as you start to do your own researching, understanding why something works the way that it does can save your scalp from a lot of hair pulling. We do not have to become history buffs or memorize the entire history of the web, but rather just have a general idea of how we got where we are. And once again - I can't stress enough - there is no downside to seeming like you know what you are talking about, especially in an interview.

Over the course of the project, I will try my best to provided some context to the topics that we cover if it is needed (whether I deem it is or if its requested of me, so feel free to ask!). The goal here is not to just learn to program or code, but to learn to become good developers and so we have to hold ourselves to a higher standard than just blindly using tools that are available to use. While that make be fun, and a good way to learn/progrss at first, you can only throw a hammer a nail so many times before realising that it would be much more beneficial to learn how the hammer should be properly used (I feel like that analogy is iffy, but you get it).

---


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Git]: <https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F>
