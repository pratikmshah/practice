class ArticlesController < ApplicationController
  before_action :set_article, only: [:edit, :update, :show, :destroy] # before the 4 routes the set_article method is called

  def index
    @articles = Article.all
  end

  def new
    @article = Article.new
  end

  def edit
    set_article
  end

  def create
    #render plain: params[:article].inspect  # display the paramaters to screen
    @article = Article.new(article_params)
    @article.user = User.first

    # if article saves then go to show else go back to new
    if @article.save
      flash[:success] = "Article was successfully created"
      redirect_to article_path(@article)
    else
      render 'new'
    end
  end

  def update
    set_article

    if @article.update(article_params)
      flash[:success] = "Article was updated"
      redirect_to article_path(@article)
    else
      render 'edit'
    end

  end

  def destroy
    set_article
    @article.destroy
    flash[:success] = "Article was deleted"
    redirect_to articles_path
  end

  def show
    set_article
  end

  private
    def set_article
      @article = Article.find(params[:id])
    end

    def article_params
      # top level is article and allow title and description
      params.require(:article).permit(:title, :description)
    end

end