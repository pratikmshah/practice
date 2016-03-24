class ArticlesController < ApplicationController
  def new
    @article = Article.new
  end

  def create
    #render plain: params[:article].inspect  # display the paramaters to screen
    @article = Article.new(article_params)

    # if article saves then go to show else go back to new
    if @article.save
      flash[:notice] = "Article was successfully created"
      redirect_to article_path(@article)
    else
      render 'new'
    end
  end

  def show
    @article = Article.find(params[:id])
  end

  private
    def article_params
      # top level is article and allow title and description
      params.require(:article).permit(:title, :description)
    end

end