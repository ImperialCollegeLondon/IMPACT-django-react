# Generated by Django 4.2 on 2023-12-13 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_communityworker_olderadult_screening_studypartner_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='communityworker',
            name='visit_id',
            field=models.ManyToManyField(blank=True, null=True, related_name='visit_id', to='api.visit'),
        ),
    ]
