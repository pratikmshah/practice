class Article < ActiveRecord::Base
  belongs_to :user
  has_many :article_categories
  has_many :categories, through: :article_categories

  # title, description and user_id for record is mandatory
  validates :title, presence: true,
            length: { minimum: 3, maximum: 50 }

  validates :description, presence: true,
            length: { minimum: 10 }

  validates :user_id, presence: true

end