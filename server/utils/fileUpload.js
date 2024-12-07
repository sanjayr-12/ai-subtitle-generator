import { GoogleAIFileManager, FileState } from "@google/generative-ai/server";
import { configDotenv } from "dotenv";
configDotenv();

export const fileManager = new GoogleAIFileManager(process.env.API_KEY);

export async function fileUpload(path, videoData) {
  try {
    const uploadResponse = await fileManager.uploadFile(path, {
      mimeType: "video/mp4",
      displayName: videoData.name,
    });
    const name = uploadResponse.file.name;
    let file = await fileManager.getFile(name);
    while (file.state === FileState.PROCESSING) {
      process.stdout.write(".");
      await new Promise((res) => setTimeout(res, 10_000));
      file = await fileManager.getFile(name);
    }
    if (file.state === FileState.FAILED) {
      throw new Error("Video processing failed");
    }
    return file;
  } catch (error) {
    throw error;
  }
}
