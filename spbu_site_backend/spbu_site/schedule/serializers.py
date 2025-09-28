from rest_framework import serializers
from .models import Schedule, Group, Room



class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name']

class ScheduleSerializer(serializers.ModelSerializer):

    group = GroupSerializer()
    location = RoomSerializer()
    class Meta:
        model = Schedule
        fields = '__all__'