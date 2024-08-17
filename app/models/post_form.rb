class PostForm
  include ActiveModel::Model
  attr_accessor :text, :image, :id, :created_at, :updated_at

  with_options presence: true do
    validates :text
    validates :image
  end

  def save
    Post.create(text: text, image: image)
  end

  def update(params, post)
    post.update(params)
  end
end