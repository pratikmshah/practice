class ArticlesController < ApplicationController
  def new
    @article = Article.new
  end

  def create
    #render plain: params[:article].inspect  # display the paramaters to screen
    @article = Article.new(article_params)
    @article.save
    redirect_to articles_show(@article)
  end

  private
    def article_params
      # top level is article and allow title and description
      params.require(:article).permit(:title, :description)
    end

end