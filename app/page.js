"use client";
import { useState } from "react";

export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  const [quality, setQuality] = useState("360p");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ videoUrl, quality }),
      });

      const data = await response.json();

      if (data.downloadLink) {
        setError("");

        // Créer un élément <a> invisible pour déclencher le téléchargement
        const link = document.createElement("a");
        link.href = data.downloadLink;
        link.setAttribute("download", "video.mp4"); // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        setError("Failed to fetch video. Please check the URL and try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          YouTube Video Downloader
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="videoUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Enter YouTube Video URL:
            </label>
            <input
              type="text"
              id="videoUrl"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="quality"
              className="block text-sm font-medium text-gray-700"
            >
              Select Quality:
            </label>
            <select
              id="quality"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="144p">144p</option>
              <option value="360p">360p</option>
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Download
          </button>
        </form>

        {error && (
          <div className="mt-6 text-center">
            <p className="text-red-600">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
