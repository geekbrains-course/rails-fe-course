module Api
  module V1
    class PostsController < ApplicationController
      def index
        @posts = Post.all
      end

      def show
        @post = Post.find(params[:id])
      end
    end
  end
end