class Post < ApplicationRecord
  has_rich_text :content

  scope :search, ->(query) { where("title LIKE ?", "%#{query}%") }

  def like!
    increment!(:likes_count)
  end
end
