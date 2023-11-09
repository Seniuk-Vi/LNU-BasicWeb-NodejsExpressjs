# Posts Management

A simple web application to manage posts built using Express.js and Fetch API. Users can create, edit, and delete posts. The list of posts is automatically updated every 5 seconds to keep the page content synchronized with the latest data.

## Features

- Create a new post with title, description, and author
- Edit existing posts
- Delete posts
- Asynchronous updates using Fetch API
- Auto-refresh the list of posts every 5 seconds

## Setup Guide

Follow these steps to set up and run the Posts Management application locally:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Step 1: Clone the repository

Clone the repository to your local machine:

```shell
git clone https://github.com/Seniuk-Vi/LNU-BasicWeb-NodejsExpressjs.git
```

### Step 2: Install dependencies

Navigate to the project directory:

```shell
cd <project-name>
```

Install the necessary dependencies using npm (Node Package Manager):

```shell
npm install
```

### Step 3: Start the application

Start the Express.js server:

```shell
node server.js
```

You should see the following output:

```shell
Server is running on port 3000
```

### Step 4: Access the application

Open a web browser and go to the following address:

```
http://localhost:3000
```

You should now see the Posts Management application running and be able to create, edit, and delete posts.

## License

MIT License
Copyright (c) 2023 Vitalii Seniuk

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

