module Api
  module V1
    class CommentsController < ApplicationController
      def index
        render json: Comment.where(post_id: params[:post_id])
      end

      def create
        comment = Comment.create(comment_params)
        render json: comment
      end

      def destroy
        Comment.destroy(params[:id])
      end

      private

      def comment_params
        params.require(:comment).permit(:author, :text, :post_id)
      end
    end
  end
end
