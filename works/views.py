# ------------ Libraries --------------------------
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
# ------------ Own Files --------------------------
from .models import Todos
from .serializers import TodosSerializer
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"

# ------------- API Routes ------------------------
# Method to look the diferent routes
@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'endpoint':'/todos/',
            'methods': 'GET, POST',
            'body': None,
            'Description': 'Returns an array of todos, and creates new todos'
        },
        {
            'endpoint': '/todo/id',
            'methods': 'GET, PUT, DELETE',
            'body': None,
            'Description': 'Returns the todo, and Updates the todo, and delete the todo'
        }

    ]
    return Response(routes)
# API to create and look for todos
@api_view(['GET', 'POST'])
def getCreateTodo(request):
    # Create the todo
    if request.method == 'POST':
        data = request.data
        todo = Todos.objects.create(
            title=data['title'],
            description = data['description'],
            responsable=data['responsable'],
            finish_at = data['finish_at'],
            urgency = data['urgency']
        )
        serializer = TodosSerializer(todo, many=False)
        return Response(serializer.data)
    # Get the todos
    elif request.method == 'GET':
        todos = Todos.objects.all()
        serializer = TodosSerializer(todos, many=True)
        return Response(serializer.data)

# API to look for the todo, update or delete
@api_view(['GET', 'PUT', 'DELETE'])
def getDeleteUpdateTodo(request, pk):
    # Get the todo information
    todo = Todos.objects.get(id=pk)
    # Get the todo 
    if request.method == 'GET':
        serializer = TodosSerializer(todo, many=False)
        return Response(serializer.data)
    # Update the todo
    if request.method == 'PUT':
        data = request.data
        serializer = TodosSerializer(instance=todo, data=data)
        # Save the updated todo
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)
    # Delete the todo
    if request.method == 'DELETE':
        todo.delete()
        return Response("TODO DELETED")