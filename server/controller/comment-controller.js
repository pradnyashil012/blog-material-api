import { response } from "express";
import Comments from "../schema/comment-schema.js";

export const newComment = async (request, response) => {
    
  try {
    const comment = await new Comments(request.body);
    comment.save();

    response.status(200).json("Comment saved successfully!");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const getComments = async (request, response) => {
    try {
        const comments = await Comments.find({ postId: request.params.id });
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deleteComment = async (request, response) => {
  try {
      const comment = await Comments.findById(request.params.id);
      await comment.delete();
      response.status(200).json("Comment deleted successfully!");
  } catch (error) {
      response.status(500).json(error);
  }
}