
# ------------------------ Libraries -------------------------
from django.urls import path
# ---------------------- Own Files -----------------------------
from . import views
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------------ URLs ------------------------------------------------
# getDeleteUpdateBlog
# urls
urlpatterns = [
   # Get the routes for the blogs API
   path('', views.getRoutes, name="routes"),
   # Create and get blogs
   path('todos/', views.getCreateTodo, name="todos"),
   # Get, Delete, and Update Blog
   path('todos/todo/<str:pk>/', views.getDeleteUpdateTodo, name="todo"),
]