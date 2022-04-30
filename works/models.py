from django.db import models
from django.utils.translation import gettext_lazy as _

class Todos(models.Model):
    # --------------- ENUMERATIONS ---------------------------------
    # urgency enumeration
    class UrgencyLevel(models.TextChoices):
        LOW = 'LW', _('Low')
        MEDIUM = 'MD', _('Medium')
        HIGH = 'HG', _('High')

    # -------------------- Fields --------------------------------
    title = models.CharField(null=False, max_length=50)
    description = models.TextField(null=True, blank=True)
    responsable = models.CharField(null=False, max_length=100)
    finish_at = models.DateField(null=False)
    # Urgency level field
    urgency = models.CharField(
        max_length=2,
        choices=UrgencyLevel.choices,
        default=UrgencyLevel.LOW,
    )

    def is_upperclass(self):
        return self.urgency in {
            self.UrgencyLevel.MEDIUM,
            self.UrgencyLevel.HIGH,
        }
