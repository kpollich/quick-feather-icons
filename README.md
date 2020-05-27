<h1 align="center">
  Quick Feather Icons
  <br />
  <img src="https://quick-feather-icons.now.sh/api/icon?name=feather&color=%23fff" />
  </br />
</h1>

<p align="center">
  Quickly copy links to <a href="https://feathericons.com/">Feather icons</a> for use in Notion and anywhere else
  <br />
  <a href="https://quick-feather-icons.now.sh/">https://quick-feather-icons.now.sh/</a>
</p>

<img src="https://user-images.githubusercontent.com/6766512/83081606-1695d480-a04f-11ea-8472-4f091dfd7438.png" />

<img src="https://user-images.githubusercontent.com/6766512/83081550-f9610600-a04e-11ea-9339-a4c7d947df01.png" />

## Problem

[Notion](https://www.notion.so/) allows users to provide their own icons and customize the look and feel of their notes. To do this, a user can upload an asset themself or provide a link. The official [website](https://feathericons.com/) for Feather icons is great, and it allows you to easily customize and download SVG's of all their great icons. It does not, however, provide a way to copy a unique URL for each icon. It's cumbersome to download all icons and re-upload them to Notion every time I want to use an icon, so I wanted a an easy way to copy a static link to each icon instead.

## Tech Stack

This is a [Next.js](https://nextjs.org/) website built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/).

## Installation

To run the project locally, clone the repo, then install dependencies via [Yarn](https://classic.yarnpkg.com/lang/en/) - ensure you're using the "classic" version of Yarn.

```sh
$ git clone git@github.com:kpollich/quick-feather-icons.git
$ cd quick-feather-icons

# Install dependencies
$ yarn
```

Once the installation is complete, you can run `yarn dev` to start a local development server on `http://localhost:3000`

```sh
$ yarn start
```

## API Usage

If you'd prefer not to use the frontend interface, all icons links are exposed at a predictable URL structure via an API endpoint using Next's [API routes](https://nextjs.org/docs/api-routes/introduction).

```sh
curl 'https://quick-feather-icons.now.sh/api/icon?name=activity&color=green'
```

These API requests accept a valid `name` of a given Feather icon and any valid `CSS` color string. The response will contain the raw SVG string with a `Content-Type` header value of `image/svg+xml`.
