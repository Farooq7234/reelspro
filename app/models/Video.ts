import mongoose, { model, models, Schema } from "mongoose";

export const VIDEO_DIMENSION = {
  width: 1000,
  height: 1920,
} as const;

export interface IVideo {
  _id?: mongoose.Types.ObjectId;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  controls?: boolean;
  transformation?: {
    height: number;
    width: number;
  };
  createdAt?: Date;
  updatedAt?: Date;
}

const VideoSchema = new Schema<IVideo>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    transformation: {
      height: {
        type: Number,
        default: VIDEO_DIMENSION.height,
      },
      width: {
        type: Number,
        default: VIDEO_DIMENSION.width,
      },
    },
  },
  { timestamps: true }
);

const Video = models?.Video || model<IVideo>("Video", VideoSchema);

export default Video;
