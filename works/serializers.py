
# -------------- Libraries ---------------------------
from rest_framework.serializers import ModelSerializer
# -------------- own files ---------------------------
from .models import Todos
# ------------------ Copyright ----------------------------------
__author__ = "Danny Sequeira"
__copyright__ = "Copyright (C) Danny Sequeira 2022"
# ------------ Models --------------------------------
class TodosSerializer(ModelSerializer):
    class Meta:
        model = Todos
        fields = '__all__'