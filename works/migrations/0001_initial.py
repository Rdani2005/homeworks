# Generated by Django 4.0.4 on 2022-04-27 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todos',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('description', models.TextField(blank=True, null=True)),
                ('responsable', models.CharField(max_length=100)),
                ('finish_at', models.DateField()),
                ('urgency', models.CharField(choices=[('LW', 'Low'), ('MD', 'Medium'), ('HG', 'High')], default='LW', max_length=2)),
            ],
        ),
    ]
