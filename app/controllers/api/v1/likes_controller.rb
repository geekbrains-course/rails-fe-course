module Api
  module V1
    class LikesController < ApplicationController
      def index
        @amount_likes = Post.find(params[:post_id])&.likes.count
      end

      def create
        @post = Post.find(params[:post_id])
        @post.likes.create
        @post.reload
      end
    end
  end
end