# YouTube Video Downloader

This project is a web application developed with **Next.js** that allows to download YouTube videos by specifying the video URL and the desired quality. The application uses `yt-dlp` to retrieve the download links and serves them to the client for automatic downloading.

---

## Features

- Download YouTube videos in different qualities (144p, 360p, 720p, 1080p).
- Simple and intuitive user interface.
- Automatic download after form submission.

---

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (to get the download links)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-user/your-repo.git
cd your-repo

```

2. **Install dependencies**

Use `npm` or `yarn` to install the project's dependencies.

```bash
npm install

# or

yarn install
```

3. **Install yt-dlp**
   Make sure you have `yt-dlp` installed on your system. You can install it via pip or download the binary directly.

```bash
pip install yt-dlp
```

Or download it from [yt-dlp GitHub](https://github.com/yt-dlp/yt-dlp).

4. **Set up the environment**
   Create a `.env` file in the root of the project to set up environment variables if needed.

```bash
touch .env
```

No environment variables are required at this time, but you can add them if you need them later.

---

## Usage

1. **Start the development server**
   To launch the application in development mode, run the following command:

```bash
npm run dev
# or
yarn dev
```

The application will be accessible at the address: [http://localhost:3000](http://localhost:3000).

2. **Use the application**

- Enter the URL of the YouTube video in the field provided.

- Select the desired quality.

- Click on Download to start the download.

The download will start automatically after submitting the form.

## Project structure

- `/app`: Contains the Next.js pages and API routes (App Router).

- `page.js`: Home page with the download form.

- `/api` : Folder containing the API (`route.js`) to manage download requests.

- `/public` : Contains static files (images, styles, etc.).

- `/styles` : Contains CSS or Tailwind files (if used).

- `package.json` : List of project dependencies and scripts.

## Dependencies

`Next.js` : React framework for server-side rendering and static site generation.

`yt-dlp` : Command-line tool to download YouTube videos.

`Tailwind CSS` (optional): CSS framework to style the user interface.

## Contribute

Contributions are welcome! If you want to improve this project, follow these steps:

1. Fork the project.

2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`).

3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).

4. Push the branch (`git push origin feature/AmazingFeature`).

5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Author

- Sékou Dayifourou KEITA - [Dayifour](https://github.com/dayifour)
