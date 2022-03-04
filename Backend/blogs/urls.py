from rest_framework.routers import SimpleRouter
from blogs import views

router = SimpleRouter()

router.register(r'document', views.DocumentView)
router.register(r'question', views.QuestionView)
router.register(r'questionimage', views.QuestionImageView)
router.register(r'questionhastag', views.HastagView)
router.register(r'answer', views.AnswerView)
router.register(r'answerimage', views.AnswerImageView)

urlpatterns = router.urls
