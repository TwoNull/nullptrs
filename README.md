<br />
<div align="center">
  <a href="https://github.com/twonull/nullptrs">
    <img src="https://github.com/TwoNull/nullptrs/blob/main/app/icon.svg" alt="" width="80" height="80">
  </a>

<h3 align="center">NULLPTRS.CO</h3>

  <p align="center">
    A personal portfolio to showcase various projects and writeups
    <br />
    <br />
    <a href="https://nullptrs.co/"><strong>Visit the Site »</strong></a>
    <br />
  </p>
</div>



### Abstract

This site is meant to act as a portfolio of my work, as well as to provide links to all of my associated social profiles. I chose to use Sanity headless CMS to allow the site to expand over time and to demonstrate the power of Next.js 13's new Fetch function. The design is inspired Swedish record label Year0001's minimalist approach.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Made With

[![Next][Next.js]][Next-url] [![Typescript][Typescript]][Typescript-url] [![Sanity][Sanity]][Next-url] [![Three.js][Three.js]][Three-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Build it yourself

Below are the prerequisites to build this website from source.
* [Node.js v16 or Greater](https://nodejs.org/en/download)



### Setup

1. Clone the repo
   ```sh
   $ git clone https://github.com/TwoNull/nullptrs.git
   ```
   <br />
2. Install all dependencies via npm
   ```sh
   $ cd nullptrs && npm install
   ```
   <br />
3. Rename `.env.example` to `.env.local` and fill the required fields. You will need to create your own Sanity project and populate it according to the schemas in `sanity/schemas/`
<br />
4. Build the Next.js site
   ```sh
   $ npm run build
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[Typescript]: https://shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=FFF
[Typescript-url]: https://www.typescriptlang.org/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Three.js]: https://img.shields.io/badge/Three.js-EFEFEF?style=for-the-badge&logo=threedotjs&logoColor=black
[Three-url]: https://threejs.org/
[Sanity]: https://shields.io/badge/Sanity-f03e2f?style=for-the-badge&logoColor=FFF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMzZfNDgwKSI+CjxyZWN0IGZpbGw9IiNGMDNFMkYiIHJ4PSI4IiBoZWlnaHQ9IjEyOCIgd2lkdGg9IjEyOCI+PC9yZWN0Pgo8cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTM5LjQyMjkgMzMuMTYyOUMzOS40MjI5IDQ0LjE2MTQgNDYuMzM2MiA1MC43MDU1IDYwLjE3NjcgNTQuMTU2M0w3NC44NDI5IDU3LjQ5NzFDODcuOTQxNyA2MC40NTMgOTUuOTE4NSA2Ny43OTQ1IDk1LjkxODUgNzkuNzU1NEM5Ni4wMjA0IDg0Ljk2NjIgOTQuMjk2IDkwLjA1MyA5MS4wMzQ1IDk0LjE2MzRDOTEuMDM0NSA4Mi4yMyA4NC43NTEgNzUuNzgyMiA2OS41OTUgNzEuOTA1Mkw1NS4xOTQ3IDY4LjY4ODFDNDMuNjYzMyA2Ni4xMDM1IDM0Ljc2MjggNjAuMDY4IDM0Ljc2MjggNDcuMDc2QzM0LjcwMjEgNDIuMDU4OSAzNi4zNDE1IDM3LjE2NDQgMzkuNDIyOSAzMy4xNjI5Ij48L3BhdGg+CjxwYXRoIGZpbGw9IiNGOUIxQUIiIGQ9Ik04Mi4wMjIxIDc2LjgyN0M4OC4yNzc2IDgwLjc1OSA5MS4wMjA2IDg2LjI1ODIgOTEuMDIwNiA5NC4xNDk3Qzg1Ljg0MjYgMTAwLjY2NiA3Ni43NDYyIDEwNC4zMjMgNjYuMDU0NSAxMDQuMzIzQzQ4LjA1NzYgMTA0LjMyMyAzNS40NjI2IDk1LjYyMDcgMzIuNjYzNyA4MC40OTc4SDQ5Ljk0NjhDNTIuMTcyIDg3LjQ0MDYgNTguMDYzNiA5MC42NTc3IDY1LjkyODUgOTAuNjU3N0M3NS41Mjg3IDkwLjY1NzcgODEuOTEwMiA4NS42MjU4IDgyLjAzNjEgNzYuNzk5NSI+PC9wYXRoPgo8cGF0aCBmaWxsPSIjRjlCMUFCIiBkPSJNNDguNDA3NCA0OS40NjgyQzQ1LjU1MDkgNDcuODAwNCA0My4yMDczIDQ1LjQwNCA0MS42MjU1IDQyLjUzMzJDNDAuMDQzNyAzOS42NjI0IDM5LjI4MjUgMzYuNDI0NCAzOS40MjMgMzMuMTYyOUM0NC40MTkgMjYuNzAxMyA1My4xMDk1IDIyLjc1NTYgNjMuNzAzMyAyMi43NTU2QzgyLjAzNjEgMjIuNzU1NiA5Mi42NDM5IDMyLjI2OTMgOTUuMjYwOCA0NS42Nkg3OC42MzU0Qzc2LjgwMjEgNDAuMzgwNyA3Mi4yMTIgMzYuMjcgNjMuODQzMyAzNi4yN0M1NC45MDA4IDM2LjI3IDQ4Ljc5OTIgNDEuMzg0MyA0OC40NDk0IDQ5LjQ2ODIiPjwvcGF0aD4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMzZfNDgwIj4KPHJlY3QgZmlsbD0id2hpdGUiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ij48L3JlY3Q+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==
[Sanity-url]: https://www.sanity.io/