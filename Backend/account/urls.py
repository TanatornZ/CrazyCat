from rest_framework.routers import SimpleRouter
from account import views

router = SimpleRouter()

router.register(r'address',views.AddressView)
router.register(r'customer',views.CustomerUserView)

urlpatterns = router.urls